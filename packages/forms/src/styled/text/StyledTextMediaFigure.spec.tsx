/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { StyledTextMediaFigure } from './StyledTextMediaFigure';
import TestIcon from '@zendeskgarden/svg-icons/src/16/gear-stroke.svg';

describe('StyledTextMediaFigure', () => {
  it('renders the expected element', () => {
    const { container } = render(
      <StyledTextMediaFigure>
        <TestIcon />
      </StyledTextMediaFigure>
    );

    expect(container.firstChild!.nodeName).toBe('svg');
    expect(container.firstChild).toHaveStyleRule('width', '16px');
    expect(container.firstChild).toHaveStyleRule('color', PALETTE.grey[600]);
  });

  it('renders expected hovered styling', () => {
    const { container } = render(
      <StyledTextMediaFigure isHovered>
        <TestIcon />
      </StyledTextMediaFigure>
    );

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.grey[700]);
  });

  it('renders rotated styling if provided', () => {
    const { container } = render(
      <StyledTextMediaFigure isRotated>
        <TestIcon />
      </StyledTextMediaFigure>
    );

    expect(container.firstChild).toHaveStyleRule('transform', 'rotate(+180deg)');
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(
      <StyledTextMediaFigure isRotated>
        <TestIcon />
      </StyledTextMediaFigure>
    );

    expect(container.firstChild).toHaveStyleRule('transform', 'rotate(-180deg)');
  });
});
