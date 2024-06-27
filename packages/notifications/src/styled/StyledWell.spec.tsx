/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { getRenderFn, render, renderRtl } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { StyledWell } from '../styled';

describe('StyledWell', () => {
  it('should render with the correct styling for RTL writing systems', () => {
    const { container } = renderRtl(<StyledWell />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('should render with the correct styling for LTR writing systems', () => {
    const { container } = render(<StyledWell />);

    expect(container.firstChild).not.toHaveStyleRule('direction');
  });

  it('renders non-recessed styling correctly', () => {
    const { container } = render(<StyledWell />);

    expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.white);
  });

  it.each([
    ['light', PALETTE.grey[100]],
    ['dark', PALETTE.grey[1200]]
  ])('renders recessed styling correctly', (mode, color) => {
    const { container } = getRenderFn(mode)(<StyledWell $isRecessed />);

    expect(container.firstChild).toHaveStyleRule('background-color', color);
  });

  it.each([
    ['light', PALETTE.white],
    ['dark', PALETTE.grey[1100]]
  ])('renders floating styling correctly', (mode, color) => {
    const { container } = getRenderFn(mode)(<StyledWell />);

    expect(container.firstChild).toHaveStyleRule('background-color', color);
  });
});
