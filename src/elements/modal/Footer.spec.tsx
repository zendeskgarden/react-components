/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { Footer } from './Footer';
import { Modal } from './Modal';

describe('Footer', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Modal>
        <Footer ref={ref} data-test-id="footer">
          Footer content
        </Footer>
      </Modal>
    );

    expect(getByTestId('footer')).toBe(ref.current);
  });
});
