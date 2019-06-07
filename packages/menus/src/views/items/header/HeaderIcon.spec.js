/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import HeaderIcon from './HeaderIcon';

describe('HeaderIcon', () => {
  it('renders default styling', () => {
    const { container } = render(
      <HeaderIcon>
        <svg />
      </HeaderIcon>
    );

    expect(container.firstChild).toHaveClass('c-menu__item--header__icon');
  });
});
