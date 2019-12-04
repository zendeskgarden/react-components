/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { NavItemText } from './NavItemText';

describe('NavItemText', () => {
  it('renders default styling', () => {
    const { container } = render(<NavItemText />);

    expect(container.firstChild).toHaveClass('c-chrome__nav__item__text');
  });

  it('renders wrap styling if provided', () => {
    const { container } = render(<NavItemText isWrapped />);

    expect(container.firstChild).toHaveClass('c-chrome__nav__item__text--wrap');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<NavItemText ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
