/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { HeaderItem } from './HeaderItem';
import { PRODUCTS, PRODUCT } from '../../utils/types';

describe('HeaderItem', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(<HeaderItem ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders maxX styling', () => {
    const { container } = render(<HeaderItem maxX />);

    expect(container.firstChild).toHaveStyle(`
      flex: 1;
      justify-content: start;
    `);
  });

  it('renders maxY styling', () => {
    const { container } = render(<HeaderItem maxY />);

    expect(container.firstChild).toHaveStyle(`
      height: 100%;
      border-radius: 0;
    `);
  });

  it('renders isRound styling', () => {
    const { container } = render(<HeaderItem isRound />);

    expect(container.firstChild).toHaveStyleRule('border-radius', '100%');
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

    it('renders correct product color', () => {
      PRODUCTS.forEach(product => {
        const { container } = render(<HeaderItem hasLogo product={product} />);

        expect(container.firstChild).toHaveStyleRule('color', VALID_COLOR_MAP[product]);
      });
    });

    it('renders correct color if no product is provided', () => {
      const { container } = render(<HeaderItem hasLogo />);

      expect(container.firstChild).toHaveStyleRule('color', 'inherit');
    });
  });
});
