/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import { FooterItem } from './FooterItem';
import { Modal } from './Modal';

describe('FooterItem', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Modal>
        <FooterItem ref={ref} data-test-id="footer-item">
          FooterItem content
        </FooterItem>
      </Modal>
    );

    expect(getByTestId('footer-item')).toBe(ref.current);
  });
});
