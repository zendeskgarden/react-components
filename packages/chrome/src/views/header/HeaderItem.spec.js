/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import HeaderItem from './HeaderItem';

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
    const { container } = render(<HeaderItem logo />);

    expect(container.firstChild).toHaveClass('c-chrome__body__header__item--logo');
  });

  it('renders round styling if provided', () => {
    const { container } = render(<HeaderItem round />);

    expect(container.firstChild).toHaveClass('c-chrome__body__header__item--round');
  });

  describe('States', () => {
    it('renders active styling if provided', () => {
      const { container } = render(<HeaderItem active />);

      expect(container.firstChild).toHaveClass('is-active');
    });

    it('renders focused styling if provided', () => {
      const { container } = render(<HeaderItem focused />);

      expect(container.firstChild).toHaveClass('is-focused');
    });

    it('renders hovered styling if provided', () => {
      const { container } = render(<HeaderItem hovered />);

      expect(container.firstChild).toHaveClass('is-hovered');
    });
  });

  describe('Products', () => {
    ['chat', 'connect', 'explore', 'guide', 'message', 'support', 'talk'].forEach(product => {
      it(`renders ${product} styling if provided`, () => {
        const { container } = render(<HeaderItem product={product} />);

        expect(container.firstChild).toHaveClass(`c-chrome__body__header__item--logo--${product}`);
      });
    });
  });
});
