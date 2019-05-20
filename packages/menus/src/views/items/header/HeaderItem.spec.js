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

    expect(container.firstChild).toHaveClass('c-menu__item--header');
  });

  it('renders icon styling if provided', () => {
    const { container } = render(
      <HeaderItem containsIcon>
        <svg />
      </HeaderItem>
    );

    expect(container.firstChild).toHaveClass('c-menu__item--header--icon');
  });
});
