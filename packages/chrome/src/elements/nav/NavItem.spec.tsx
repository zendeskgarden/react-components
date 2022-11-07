/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { PALETTE, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Chrome } from '../Chrome';
import { NavItem } from './NavItem';
import { Nav } from './Nav';
import { PRODUCT, Product } from '../../types';

describe('NavItem', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(<NavItem ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders expanded styling', () => {
    const { container } = render(
      <Nav isExpanded>
        <NavItem />
      </Nav>
    );

    expect(container.firstChild!.firstChild).toHaveStyle(`
      justify-content: start;
      text-align: inherit;
    `);
  });

  describe('Current', () => {
    it('renders state attribute when current', () => {
      const { getByTestId } = render(<NavItem isCurrent data-test-id="current-nav-item" />);

      const currentNavItem = getByTestId('current-nav-item');

      expect(currentNavItem).toHaveAttribute('aria-current', 'true');
    });

    it('does not render state attribute when not current', () => {
      const { getByTestId } = render(<NavItem data-test-id="nav-item" />);

      const navItem = getByTestId('nav-item');

      expect(navItem).not.toHaveAttribute('aria-current');
    });
  });

  describe('Order', () => {
    it('renders correct order if used as brandmark', () => {
      const { container } = render(<NavItem hasBrandmark />);

      expect(container.firstChild).toHaveStyleRule('order', '1');
    });

    it('renders correct order if used as logo', () => {
      const { container } = render(<NavItem hasLogo />);

      expect(container.firstChild).toHaveStyleRule('order', '0');
    });
  });

  describe('Opacity', () => {
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
  });

  describe('Hover Color', () => {
    it('renders correct color with dark hue', () => {
      const { container } = render(
        <Chrome hue="black">
          <NavItem />
        </Chrome>
      );

      expect(container.firstChild!.firstChild).toHaveStyleRule(
        'background-color',
        'rgba(0,0,0,0.1)',
        {
          modifier: '&:hover'
        }
      );
    });

    it('renders correct color with light hue', () => {
      const { container } = render(
        <Chrome hue="white">
          <NavItem />
        </Chrome>
      );

      expect(container.firstChild!.firstChild).toHaveStyleRule(
        'background-color',
        'rgba(255,255,255,0.1)',
        {
          modifier: '&:hover'
        }
      );
    });
  });

  describe('Current Color', () => {
    it('renders correct color by default', () => {
      const { container } = render(
        <Chrome>
          <NavItem isCurrent />
        </Chrome>
      );

      expect(container.firstChild!.firstChild).toHaveStyleRule(
        'background-color',
        getColor('chromeHue', 500, DEFAULT_THEME)
      );
    });

    it('renders correct color with dark hue', () => {
      const { container } = render(
        <Chrome hue="black">
          <NavItem isCurrent />
        </Chrome>
      );

      expect(container.firstChild!.firstChild).toHaveStyleRule(
        'background-color',
        'rgba(255,255,255,0.3)'
      );
    });

    it('renders correct color with light hue', () => {
      const { container } = render(
        <Chrome hue="white">
          <NavItem isCurrent />
        </Chrome>
      );

      expect(container.firstChild!.firstChild).toHaveStyleRule(
        'background-color',
        'rgba(0,0,0,0.3)'
      );
    });
  });

  describe('Products', () => {
    const VALID_COLOR_MAP: Record<Product, string> = {
      chat: PALETTE.product.chat,
      connect: PALETTE.product.connect,
      explore: PALETTE.product.explore,
      guide: PALETTE.product.guide,
      message: PALETTE.product.message,
      support: PALETTE.product.support,
      talk: PALETTE.product.talk
    };

    it('renders correct product color if provided', () => {
      PRODUCT.forEach(product => {
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
