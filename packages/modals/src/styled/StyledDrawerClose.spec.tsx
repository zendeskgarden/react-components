/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledDrawerClose } from './StyledDrawerClose';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';

describe('StyledDrawerClose', () => {
  it('renders default styling', () => {
    const { container } = render(
      <StyledDrawerClose>
        <XStrokeIcon />
      </StyledDrawerClose>
    );

    expect(container.firstChild).toHaveStyleRule('top', '10px');
    expect(container.firstChild).toHaveStyleRule('right', '8px');
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(
      <StyledDrawerClose>
        <XStrokeIcon />
      </StyledDrawerClose>
    );

    expect(container.firstChild).toHaveStyleRule('top', '10px');
    expect(container.firstChild).toHaveStyleRule('left', '8px');
  });
});
