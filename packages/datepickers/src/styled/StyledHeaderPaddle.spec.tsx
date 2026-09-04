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
});
