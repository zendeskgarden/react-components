/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
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

  it('renders default styling', () => {
    const { getByTestId } = render(
      <Modal>
        <FooterItem data-test-id="footer-item">FooterItem content</FooterItem>
      </Modal>
    );

    expect(getByTestId('footer-item')).toHaveStyleRule(
      'margin-left',
      `${DEFAULT_THEME.space.base * 5}px`
    );
    expect(getByTestId('footer-item')).not.toHaveStyleRule('margin-right');
  });

  it('renders RTL styling', () => {
    const { getByTestId } = render(
      <Modal>
        <FooterItem data-test-id="footer-item">FooterItem content</FooterItem>
      </Modal>,
      { theme: RTL_THEME }
    );

    expect(getByTestId('footer-item')).toHaveStyleRule(
      'margin-right',
      `${DEFAULT_THEME.space.base * 5}px`
    );
    expect(getByTestId('footer-item')).not.toHaveStyleRule('margin-left');
  });
});
