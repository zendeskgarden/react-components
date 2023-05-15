/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl, screen } from 'garden-test-utils';
import { StyledButtonGroup } from './StyledButtonGroup';
import { StyledButton } from './StyledButton';
import { StyledIconButton } from './StyledIconButton';
import { PALETTE } from '@zendeskgarden/react-theming';

describe('StyledButtonGroup', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledButtonGroup />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders default styling', () => {
    const { container } = render(<StyledButtonGroup />);

    expect(container.firstChild).toHaveStyleRule('z-index', '0');
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledButtonGroup />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('renders expected child button styling', () => {
    render(
      <StyledButtonGroup>
        <StyledButton>test</StyledButton>
      </StyledButtonGroup>
    );

    expect(screen.getByText('test')).toHaveStyleRule('position', 'relative', {
      modifier: `${StyledButtonGroup} &&`
    });
  });

  it('renders expected disabled icon button styling', () => {
    render(
      <StyledButtonGroup>
        <StyledIconButton>test</StyledIconButton>
      </StyledButtonGroup>
    );

    expect(screen.getByText('test')).toHaveStyleRule('background-color', PALETTE.grey[200], {
      modifier: `${StyledButtonGroup} &&:not(:first-of-type):disabled`
    });
  });
});
