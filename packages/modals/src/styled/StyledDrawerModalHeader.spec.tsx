/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';

import { StyledDrawerModalHeader } from './StyledDrawerModalHeader';

describe('StyledDrawerModalHeader', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledDrawerModalHeader />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.grey[800]);
  });

  it('renders danger styling if provided', () => {
    const { container } = render(<StyledDrawerModalHeader isDanger />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.red[600]);
  });
});
