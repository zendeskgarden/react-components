/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledIcon } from './StyledIcon';

describe('StyledIcon', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledIcon />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders default styling correctly', () => {
    const { container } = render(<StyledIcon $hasMessage />);

    expect(container.firstChild).toHaveStyle(`margin-right: ${DEFAULT_THEME.space.xs}`);
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledIcon $hasMessage />);

    expect(container.firstChild).toHaveStyle(`margin-left: ${DEFAULT_THEME.space.xs}`);
  });

  it('renders vertical styling correctly', () => {
    const { container } = render(<StyledIcon $isVertical $hasMessage />);

    expect(container.firstChild).toHaveStyle(`margin-bottom: ${DEFAULT_THEME.space.xs}`);
  });
});
