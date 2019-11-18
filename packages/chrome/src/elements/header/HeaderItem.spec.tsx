/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { HeaderItem } from './HeaderItem';
import { PRODUCT } from '../../utils/types';

describe('HeaderItem', () => {
  it('renders default styling', () => {
    const { container } = render(<HeaderItem />);

    expect(container.firstChild).toHaveClass('c-chrome__body__header__item');
  });

  it('renders maxX styling if provided', () => {
    const { container } = render(<HeaderItem maxX />);

    expect(container.firstChild).toHaveClass('c-chrome__body__header__item--max-x');
  });

  it('renders maxY styling if provided', () => {
    const { container } = render(<HeaderItem maxY />);

    expect(container.firstChild).toHaveClass('c-chrome__body__header__item--max-y');
  });

  it('renders logo styling if provided', () => {
    const { container } = render(<HeaderItem hasLogo />);

    expect(container.firstChild).toHaveClass('c-chrome__body__header__item--logo');
  });

  it('renders round styling if provided', () => {
    const { container } = render(<HeaderItem isRound />);

    expect(container.firstChild).toHaveClass('c-chrome__body__header__item--round');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(<HeaderItem ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  describe('States', () => {
    it('renders active styling if provided', () => {
      const { container } = render(<HeaderItem isActive />);

      expect(container.firstChild).toHaveClass('is-active');
    });

    it('renders focused styling if provided', () => {
      const { container } = render(<HeaderItem isFocused />);

      expect(container.firstChild).toHaveClass('is-focused');
    });

    it('renders hovered styling if provided', () => {
      const { container } = render(<HeaderItem isHovered />);

      expect(container.firstChild).toHaveClass('is-hovered');
    });
  });

  describe('Products', () => {
    ['chat', 'connect', 'explore', 'guide', 'message', 'support', 'talk'].forEach(product => {
      it(`renders ${product} styling if provided`, () => {
        const { container } = render(<HeaderItem product={product as PRODUCT} />);

        expect(container.firstChild).toHaveClass(`c-chrome__body__header__item--logo--${product}`);
      });
    });
  });
});
