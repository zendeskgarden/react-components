/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { getRenderFn, render } from 'garden-test-utils';
import { StyledIcon } from './StyledIcon';
import { PALETTE } from '@zendeskgarden/react-theming';

describe('StyledIcon', () => {
  type Args = ['light' | 'dark', string, string];

  it.each<Args>([
    ['light', PALETTE.grey[900], PALETTE.grey[200]],
    ['dark', PALETTE.grey[300], PALETTE.grey[800]]
  ])('renders default styles in "%s mode', (mode, fgColor, bgColor) => {
    const { container } = getRenderFn(mode)(<StyledIcon />);

    expect(container.firstChild).toHaveStyleRule('color', fgColor);
    expect(container.firstChild).toHaveStyleRule('background', bgColor);
    expect(container.firstChild).toHaveStyleRule('margin-right', '12px');
    expect(container.firstChild).not.toHaveStyleRule('margin-bottom');
  });

  it.each<Args>([
    ['light', PALETTE.white, PALETTE.grey[700]],
    ['dark', PALETTE.grey[1100], PALETTE.grey[300]]
  ])('renders active styles in "%s mode', (mode, fgColor, bgColor) => {
    const { container } = getRenderFn(mode)(<StyledIcon $isActive />);

    expect(container.firstChild).toHaveStyleRule('color', fgColor);
    expect(container.firstChild).toHaveStyleRule('background', bgColor);
  });

  it('renders correct icon styles for horizontal stepper', () => {
    const { container } = render(<StyledIcon $isActive $isHorizontal />);

    expect(container.firstChild).not.toHaveStyleRule('margin-right');
    expect(container.firstChild).not.toHaveStyleRule('align-self');
    expect(container.firstChild).toHaveStyleRule('margin-bottom', '8px');
  });
});
