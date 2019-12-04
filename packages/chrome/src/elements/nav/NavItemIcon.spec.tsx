/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { NavItemIcon } from './NavItemIcon';

describe('NavItemIcon', () => {
  it('renders default styling', () => {
    const { container } = render(
      <NavItemIcon>
        <svg>test</svg>
      </NavItemIcon>
    );

    expect(container.firstChild).toHaveClass('c-chrome__nav__item__icon');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <NavItemIcon ref={ref}>
        <svg>test</svg>
      </NavItemIcon>
    );

    expect(container.firstChild).toBe(ref.current);
  });
});
