/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import ChevronLeftStrokeIcon from '@zendeskgarden/svg-icons/src/16/chevron-left-stroke.svg';
import { StyledHeaderPaddle } from './StyledHeaderPaddle';

describe('StyledHeaderPaddle', () => {
  it('does not rotate the button (and its chevron icon) in LTR', () => {
    const { container } = render(
      <StyledHeaderPaddle>
        <ChevronLeftStrokeIcon />
      </StyledHeaderPaddle>
    );

    expect(container.firstChild).not.toHaveStyleRule('transform', 'rotate(180deg)');
  });

  it('rotates the button (and its chevron icon) 180 degrees in RTL', () => {
    const { container } = renderRtl(
      <StyledHeaderPaddle>
        <ChevronLeftStrokeIcon />
      </StyledHeaderPaddle>
    );

    expect(container.firstChild).toHaveStyleRule('transform', 'rotate(180deg)');
  });

  it('renders at the default size when not compact', () => {
    const { container } = render(
      <StyledHeaderPaddle>
        <ChevronLeftStrokeIcon />
      </StyledHeaderPaddle>
    );

    expect(container.firstChild).toHaveStyleRule('width', '40px');
    expect(container.firstChild).toHaveStyleRule('min-width', '40px');
    expect(container.firstChild).toHaveStyleRule('height', '40px');
  });

  it('shrinks to match the calendar button when compact', () => {
    const { container } = render(
      <StyledHeaderPaddle $isCompact>
        <ChevronLeftStrokeIcon />
      </StyledHeaderPaddle>
    );

    expect(container.firstChild).toHaveStyleRule('width', '32px');
    expect(container.firstChild).toHaveStyleRule('min-width', '32px');
    expect(container.firstChild).toHaveStyleRule('height', '32px');
  });
});
