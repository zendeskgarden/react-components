/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
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

    expect(container.firstChild).toHaveStyleRule('background-color', '#fff');
  });

  it('renders recessed styling correctly', () => {
    const { container } = render(<StyledWell $isRecessed />);

    expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.grey[100]);
  });
});
