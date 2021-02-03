/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
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
    const { getByTestId } = render(
      <StyledButtonGroup>
        <StyledButton data-test-id="group-button">test</StyledButton>
      </StyledButtonGroup>
    );

    expect(getByTestId('group-button')).toHaveStyleRule('position', 'relative', {
      modifier: `${StyledButtonGroup} &`
    });
  });

  it('renders expected disabled icon button styling', () => {
    const { getByTestId } = render(
      <StyledButtonGroup>
        <StyledIconButton data-test-id="group-button">test</StyledIconButton>
      </StyledButtonGroup>
    );

    expect(getByTestId('group-button')).toHaveStyleRule('background-color', PALETTE.grey[200], {
      modifier: `${StyledButtonGroup} &:disabled`
    });
  });
});
