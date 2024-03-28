/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { PALETTE_V8 } from '@zendeskgarden/react-theming';
import { render } from 'garden-test-utils';

import { StyledHeader } from './StyledHeader';

describe('StyledHeader', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledHeader />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE_V8.grey[800]);
  });

  it('renders danger styling if provided', () => {
    const { container } = render(<StyledHeader isDanger />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE_V8.red[600]);
  });
});
