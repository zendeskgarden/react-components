/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { SubNavItem } from './SubNavItem';

describe('SubNavItem', () => {
  it('renders default styling', () => {
    const { container } = render(<SubNavItem />);

    expect(container.firstChild).toHaveClass('c-chrome__subnav__item');
  });

  describe('States', () => {
    it('renders current styling if provided', () => {
      const { container } = render(<SubNavItem isCurrent />);

      expect(container.firstChild).toHaveClass('is-current');
    });

    it('renders focused styling if provided', () => {
      const { container } = render(<SubNavItem isFocused />);

      expect(container.firstChild).toHaveClass('is-focused');
    });

    it('renders hovered styling if provided', () => {
      const { container } = render(<SubNavItem isHovered />);

      expect(container.firstChild).toHaveClass('is-hovered');
    });

    it('passes ref to underlying DOM element', () => {
      const ref = React.createRef<HTMLButtonElement>();
      const { container } = render(<SubNavItem ref={ref} />);

      expect(container.firstChild).toBe(ref.current);
    });
  });
});
