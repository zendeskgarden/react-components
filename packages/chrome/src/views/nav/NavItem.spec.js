/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import NavItem from './NavItem';

describe('NavItem', () => {
  it('renders default styling', () => {
    const { container } = render(<NavItem />);

    expect(container.firstChild).toHaveClass('c-chrome__nav__item');
  });

  it('renders logo styling if provided', () => {
    const { container } = render(<NavItem logo />);

    expect(container.firstChild).toHaveClass('c-chrome__nav__item--logo');
  });

  it('renders brandmark styling if provided', () => {
    const { container } = render(<NavItem brandmark />);

    expect(container.firstChild).toHaveClass('c-chrome__nav__item--brandmark');
  });

  describe('States', () => {
    it('renders current styling if provided', () => {
      const { container } = render(<NavItem current />);

      expect(container.firstChild).toHaveClass('is-current');
    });

    it('renders focused styling if provided', () => {
      const { container } = render(<NavItem focused />);

      expect(container.firstChild).toHaveClass('is-focused');
    });

    it('renders hovered styling if provided', () => {
      const { container } = render(<NavItem hovered />);

      expect(container.firstChild).toHaveClass('is-hovered');
    });

    it('renders active styling if provided', () => {
      const { container } = render(<NavItem active />);

      expect(container.firstChild).toHaveClass('is-active');
    });
  });

  describe('Products', () => {
    ['chat', 'connect', 'explore', 'guide', 'message', 'support', 'talk'].forEach(product => {
      it(`renders ${product} styling if provided`, () => {
        const { container } = render(<NavItem product={product} />);

        expect(container.firstChild).toHaveClass(`c-chrome__nav__item--logo--${product}`);
      });
    });
  });
});
