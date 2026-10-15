/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { Modal } from '../elements/Modal';
import { useModalContext } from './useModalContext';

describe('useModalContext', () => {
  const ModalContextConsumer = () => {
    const context = useModalContext();

    return <div>{!!context && 'it worked'}</div>;
  };

  it('throws if called outside of Modal component', () => {
    const originalError = console.error;

    console.error = jest.fn();

    const Example = () => <ModalContextConsumer />;

    expect(() => {
      render(<Example />);
    }).toThrow();

    console.error = originalError;
  });

  it('does not throw if called within Modal component', () => {
    const Example = () => (
      <Modal>
        <ModalContextConsumer />
      </Modal>
    );

    expect(() => {
      render(<Example />);
    }).not.toThrow();
  });
});
