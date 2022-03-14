/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import { Modal } from './Modal';
import { Close } from './Close';
import { ModalsContext } from '../utils/useModalContext';

describe('Close', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();

    const { getByTestId } = render(
      <Modal>
        <Close ref={ref} data-test-id="close">
          Close content
        </Close>
      </Modal>
    );

    expect(getByTestId('close')).toBe(ref.current);
  });

  describe('functionality', () => {
    it('sets isCloseButtonPresent when mounting and unmounting', () => {
      const setCloseButtonPresent = jest.fn();
      const fn = jest.fn();
      const context = {
        getTitleProps: fn,
        getContentProps: fn,
        getCloseProps: fn,
        setCloseButtonPresent
      };

      const TestComponent = () => {
        return (
          <ModalsContext.Provider value={context}>
            <Close />
          </ModalsContext.Provider>
        );
      };

      const { unmount } = render(<TestComponent />);

      expect(setCloseButtonPresent).toHaveBeenCalledWith(true);

      unmount();

      expect(setCloseButtonPresent).toHaveBeenCalledWith(false);
      expect(setCloseButtonPresent).toHaveBeenCalledTimes(2);
    });
  });
});
