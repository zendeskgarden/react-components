/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import TestIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';
import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledFileIcon } from './StyledFileIcon';

describe('StyledFileIcon', () => {
  it('renders the expected element', () => {
    const { container } = render(
      <StyledFileIcon>
        <TestIcon />
      </StyledFileIcon>
    );

    expect(container.firstChild!.nodeName).toBe('svg');
    expect(container.firstChild).toHaveStyleRule('width', DEFAULT_THEME.iconSizes.md);
    expect(container.firstChild).toHaveStyleRule('margin-right', '8px');
  });

  it('renders expected compact styling', () => {
    const { container } = render(
      <StyledFileIcon $isCompact>
        <TestIcon />
      </StyledFileIcon>
    );

    expect(container.firstChild).toHaveStyleRule('width', DEFAULT_THEME.iconSizes.sm);
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(
      <StyledFileIcon>
        <TestIcon />
      </StyledFileIcon>
    );

    expect(container.firstChild).toHaveStyleRule('margin-left', '8px');
  });
});
