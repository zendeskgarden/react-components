/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { HeaderItemIcon } from './HeaderItemIcon';

describe('HeaderItemIcon', () => {
  it('renders default styling', () => {
    const { container } = render(
      <HeaderItemIcon>
        <svg>test</svg>
      </HeaderItemIcon>
    );

    expect(container.firstChild).toHaveClass('c-chrome__body__header__item__icon');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(
      <HeaderItemIcon ref={ref}>
        <svg>test</svg>
      </HeaderItemIcon>
    );

    expect(container.firstChild).toBe(ref.current);
  });
});
