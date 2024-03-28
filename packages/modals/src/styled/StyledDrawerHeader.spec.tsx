/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { PALETTE_V8 } from '@zendeskgarden/react-theming';

import { StyledDrawerHeader } from './StyledDrawerHeader';

describe('StyledDrawerHeader', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledDrawerHeader />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE_V8.grey[800]);
  });

  it('renders danger styling if provided', () => {
    const { container } = render(<StyledDrawerHeader isDanger />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE_V8.red[600]);
  });
});
