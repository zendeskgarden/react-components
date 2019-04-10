/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledSubNavItem } from './SubNavItem';

describe('SubNavItem', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledSubNavItem />);

    expect(container.firstChild).toHaveClass('c-chrome__subnav__item');
  });

  describe('States', () => {
    it('renders current styling if provided', () => {
      const { container } = render(<StyledSubNavItem current />);

      expect(container.firstChild).toHaveClass('is-current');
    });

    it('renders focused styling if provided', () => {
      const { container } = render(<StyledSubNavItem focused />);

      expect(container.firstChild).toHaveClass('is-focused');
    });

    it('renders hovered styling if provided', () => {
      const { container } = render(<StyledSubNavItem hovered />);

      expect(container.firstChild).toHaveClass('is-hovered');
    });
  });
});
