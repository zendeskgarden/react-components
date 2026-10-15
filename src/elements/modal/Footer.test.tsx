/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { Footer } from './Footer';
import { Modal } from './Modal';

describe('Footer', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();

    const { getByTestId } = render(
      <Modal>
        <Footer ref={ref} data-test-id="footer">
          Footer content
        </Footer>
      </Modal>
    );

    expect(getByTestId('footer')).toBe(ref.current);
  });

  it('renders default styling', () => {
    const { getByTestId } = render(
      <Modal>
        <Footer data-test-id="footer">Footer content</Footer>
      </Modal>
    );

    expect(getByTestId('footer')).not.toHaveStyleRule('border-top');
    expect(getByTestId('footer')).toHaveStyleRule(
      'padding',
      `${DEFAULT_THEME.space.base * 5}px ${DEFAULT_THEME.space.base * 10}px ${DEFAULT_THEME.space.base * 8}px`
    );
  });

  it('renders large styling', () => {
    const { getByTestId } = render(
      <Modal isLarge>
        <Footer data-test-id="footer">Footer content</Footer>
      </Modal>
    );

    expect(getByTestId('footer')).toHaveStyleRule(
      'border-top',
      `${DEFAULT_THEME.borders.sm} ${getColor({ theme: DEFAULT_THEME, variable: 'border.default' })}`
    );
    expect(getByTestId('footer')).toHaveStyleRule(
      'padding',
      `${DEFAULT_THEME.space.base * 8}px ${DEFAULT_THEME.space.base * 10}px`
    );
  });
});
