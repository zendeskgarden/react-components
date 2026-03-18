/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { Body } from './Body';
import { Modal } from './Modal';

describe('Body', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Modal>
        <Body ref={ref} data-test-id="body">
          Body content
        </Body>
      </Modal>
    );

    expect(getByTestId('body')).toBe(ref.current);
  });
});
