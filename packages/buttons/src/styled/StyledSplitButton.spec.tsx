/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl, screen } from 'garden-test-utils';
import { StyledSplitButton } from './StyledSplitButton';
import { StyledButton } from './StyledButton';
import { StyledIconButton } from './StyledIconButton';
import { PALETTE } from '@zendeskgarden/react-theming';
import { rgba } from 'polished';

describe('StyledSplitButton', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledSplitButton />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders default styling', () => {
    const { container } = render(<StyledSplitButton />);

    expect(container.firstChild).toHaveStyleRule('z-index', '0');
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledSplitButton />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('renders expected child button styling', () => {
    render(
      <StyledSplitButton>
        <StyledButton>test</StyledButton>
      </StyledSplitButton>
    );

    expect(screen.getByText('test')).toHaveStyleRule('position', 'relative', {
      modifier: `${StyledSplitButton} &&`
    });
  });

  it('renders expected disabled icon button styling', () => {
    render(
      <StyledSplitButton>
        <StyledIconButton>test</StyledIconButton>
      </StyledSplitButton>
    );

    expect(screen.getByText('test')).toHaveStyleRule(
      'background-color',
      rgba(PALETTE.grey[700], 0.08),
      {
        modifier: `${StyledSplitButton} &&:disabled`
      }
    );
  });
});
