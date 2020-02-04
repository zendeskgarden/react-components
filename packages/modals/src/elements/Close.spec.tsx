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
});
