/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { NavItem } from './NavItem';
import { PRODUCT, PRODUCTS } from '../../utils/types';
import { PALETTE } from '@zendeskgarden/react-theming';

describe('NavItem', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(<NavItem ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders correct order if used as brandmark', () => {
    const { container } = render(<NavItem hasBrandmark />);

    expect(container.firstChild).toHaveStyleRule('order', '1');
  });

  it('renders correct order if used as logo', () => {
    const { container } = render(<NavItem hasLogo />);

    expect(container.firstChild).toHaveStyleRule('order', '0');
  });

  it('renders correct opacity if used as brandmark', () => {
    const { container } = render(<NavItem hasBrandmark />);

    expect(container.firstChild).toHaveStyleRule('opacity', '0.3');
  });

  it('renders correct opacity if used as logo', () => {
    const { container } = render(<NavItem hasLogo />);

    expect(container.firstChild).toHaveStyleRule('opacity', '1');
  });

  it('renders correct opacity if current', () => {
    const { container } = render(<NavItem isCurrent />);

    expect(container.firstChild).toHaveStyleRule('opacity', '1');
  });

  describe('Products', () => {
    const VALID_COLOR_MAP: Record<PRODUCT, string> = {
      chat: PALETTE.product.chat,
      connect: PALETTE.product.connect,
      explore: PALETTE.product.explore,
      guide: PALETTE.product.guide,
      message: PALETTE.product.message,
      support: PALETTE.product.support,
      talk: PALETTE.product.talk
    };

    PRODUCTS.forEach(product => {
      it(`renders correct ${product} color if provided`, () => {
        const { container } = render(<NavItem hasLogo product={product} />);

        expect(container.firstChild).toHaveStyleRule('color', VALID_COLOR_MAP[product]);
      });
    });

    it('renders correct color if no product is provided', () => {
      const { container } = render(<NavItem hasLogo />);

      expect(container.firstChild).toHaveStyleRule('color', 'inherit');
    });
  });
});
