/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { Chrome } from '../Chrome';
import { Nav } from './Nav';
import { PRODUCTS, Product } from '../../types';

describe('NavItem', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { getByTestId } = render(
      <Nav.List>
        <Nav.Item ref={ref} data-test-id="item" />
      </Nav.List>
    );

    expect(getByTestId('item')).toBe(ref.current);
  });

  it('renders expanded styling', () => {
    const { getByTestId } = render(
      <Nav isExpanded>
        <Nav.List>
          <Nav.Item data-test-id="item" />
        </Nav.List>
      </Nav>
    );

    expect(getByTestId('item')).toHaveStyle(`
      justify-content: start;
      text-align: inherit;
    `);
  });

  describe('Current', () => {
    it('renders state attribute when current', () => {
      const { getByTestId } = render(
        <Nav.List>
          <Nav.Item isCurrent data-test-id="current-nav-item" />
        </Nav.List>
      );

      const currentNavItem = getByTestId('current-nav-item');

      expect(currentNavItem).toHaveAttribute('aria-current', 'true');
    });

    it('does not render state attribute when not current', () => {
      const { getByTestId } = render(
        <Nav.List>
          <Nav.Item data-test-id="nav-item" />
        </Nav.List>
      );

      const navItem = getByTestId('nav-item');

      expect(navItem).not.toHaveAttribute('aria-current');
    });
  });

  describe('Order', () => {
    it('renders correct order if used as brandmark', () => {
      const { container } = render(<Nav.Item hasBrandmark />);

      expect(container.firstChild).toHaveStyleRule('order', '1');
    });

    it('renders correct order if used as logo', () => {
      const { container } = render(<Nav.Item hasLogo />);

      expect(container.firstChild).toHaveStyleRule('order', '-1');
    });
  });

  describe('Opacity', () => {
    it('renders correct opacity if used as brandmark', () => {
      const { container } = render(<Nav.Item hasBrandmark />);

      expect(container.firstChild).toHaveStyleRule('opacity', '0.32');
    });

    it('renders correct opacity if used as logo', () => {
      const { container } = render(<Nav.Item hasLogo />);

      expect(container.firstChild).toHaveStyleRule('opacity', '1');
    });

    it('renders correct opacity if current', () => {
      const { getByTestId } = render(
        <Nav.List>
          <Nav.Item isCurrent data-test-id="item" />
        </Nav.List>
      );

      expect(getByTestId('item')).toHaveStyleRule('opacity', '1', {
        modifier: '&[aria-current="true"]'
      });
    });
  });

  describe('Hover Color', () => {
    it('renders correct color with dark hue', () => {
      const { getByTestId } = render(
        <Chrome hue="black">
          <Nav>
            <Nav.List>
              <Nav.Item data-test-id="item" />
            </Nav.List>
          </Nav>
        </Chrome>
      );

      expect(getByTestId('item')).toHaveStyleRule('background-color', 'rgba(0,0,0,0.08)', {
        modifier: '&:hover'
      });
    });

    it('renders correct color with light hue', () => {
      const { getByTestId } = render(
        <Chrome hue="white">
          <Nav>
            <Nav.List>
              <Nav.Item data-test-id="item" />
            </Nav.List>
          </Nav>
        </Chrome>
      );

      expect(getByTestId('item')).toHaveStyleRule('background-color', 'rgba(255,255,255,0.08)', {
        modifier: '&:hover'
      });
    });
  });

  describe('Current Color', () => {
    it('renders correct color by default', () => {
      const { getByTestId } = render(
        <Chrome>
          <Nav>
            <Nav.List>
              <Nav.Item isCurrent data-test-id="item" />
            </Nav.List>
          </Nav>
        </Chrome>
      );

      expect(getByTestId('item')).toHaveStyleRule('background-color', PALETTE.kale[700], {
        modifier: '&[aria-current="true"]'
      });
    });

    it('renders correct color with dark hue', () => {
      const { getByTestId } = render(
        <Chrome hue="black">
          <Nav>
            <Nav.List>
              <Nav.Item isCurrent data-test-id="item" />
            </Nav.List>
          </Nav>
        </Chrome>
      );

      expect(getByTestId('item')).toHaveStyleRule('background-color', 'rgba(255,255,255,0.4)', {
        modifier: '&[aria-current="true"]'
      });
    });

    it('renders correct color with light hue', () => {
      const { getByTestId } = render(
        <Chrome hue="white">
          <Nav>
            <Nav.List>
              <Nav.Item isCurrent data-test-id="item" />
            </Nav.List>
          </Nav>
        </Chrome>
      );

      expect(getByTestId('item')).toHaveStyleRule('background-color', 'rgba(0,0,0,0.4)', {
        modifier: '&[aria-current="true"]'
      });
    });
  });

  describe('Products', () => {
    const VALID_COLOR_MAP: Record<Product, string> = {
      chat: PALETTE.product.chat,
      explore: PALETTE.product.explore,
      guide: PALETTE.product.guide,
      support: PALETTE.product.support,
      talk: PALETTE.product.talk
    };

    it('renders correct product color if provided', () => {
      PRODUCTS.forEach(product => {
        const { container } = render(<Nav.Item hasLogo product={product} />);

        expect(container.firstChild).toHaveStyleRule('color', VALID_COLOR_MAP[product]);
      });
    });

    it('renders correct color if no product is provided', () => {
      const { container } = render(<Nav.Item hasLogo />);

      expect(container.firstChild).toHaveStyleRule('color', 'inherit');
    });
  });
});
