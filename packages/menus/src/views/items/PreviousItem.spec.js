/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import PreviousItem from './PreviousItem';

describe('PreviousItem', () => {
  it('renders default styling', () => {
    const { container } = render(<PreviousItem />);

    expect(container.firstChild).toHaveClass('c-menu__item--previous');
  });
});
