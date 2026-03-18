/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { PALETTE } from '@zendeskgarden/react-theming';
import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledRotateIcon } from './StyledRotateIcon';

describe('StyledRotateIcon', () => {
  it('renders default styling correctly', () => {
    const { container } = render(
      <StyledRotateIcon>
        <svg />
      </StyledRotateIcon>
    );

    expect(container.firstChild).not.toHaveStyleRule('transform');
    expect(container.firstChild).toHaveStyleRule('padding', '20px');
    expect(container.firstChild).toHaveStyleRule('color', PALETTE.grey[700]);
  });

  it('renders $isRotated styling correctly', () => {
    const { container } = render(
      <StyledRotateIcon $isRotated>
        <svg />
      </StyledRotateIcon>
    );

    expect(container.firstChild).toHaveStyleRule('transform', 'rotate(+180deg)');
  });

  it('renders $isCompact styling correctly', () => {
    const { container } = render(
      <StyledRotateIcon $isCompact>
        <svg />
      </StyledRotateIcon>
    );

    expect(container.firstChild).toHaveStyleRule('padding', '6px 12px');
  });

  it('renders $isRotated styling correctly for RTL', () => {
    const { container } = renderRtl(
      <StyledRotateIcon $isRotated>
        <svg />
      </StyledRotateIcon>
    );

    expect(container.firstChild).toHaveStyleRule('transform', 'rotate(-180deg)');
  });

  it('renders $isHovered styling correctly', () => {
    const { container } = render(
      <StyledRotateIcon $isHovered>
        <svg />
      </StyledRotateIcon>
    );

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.blue[700]);
  });
});
