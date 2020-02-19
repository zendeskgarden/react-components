/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledBase } from './StyledBase';

it('should render the correct styling for RTL writing systems', () => {
  const { container } = renderRtl(<StyledBase />);

  expect(container.firstChild).toHaveStyleRule('padding', '20px 50px 20px 40px');
});

it('should render the correct styling for LTR writing systems', () => {
  const { container } = render(<StyledBase />);

  expect(container.firstChild).toHaveStyleRule('padding', '20px 40px 20px 50px');
});

it('should renders the correct background, border, and foreground color for a given hue', () => {
  const { colors, palette } = DEFAULT_THEME;
  const { container } = render(<StyledBase hue="successHue" />);

  expect(container.firstChild).toHaveStyleRule('color', palette[colors.successHue][700]);
  expect(container.firstChild).toHaveStyleRule('border-color', palette[colors.successHue][300]);
  expect(container.firstChild).toHaveStyleRule('background-color', palette[colors.successHue][100]);
});

it('should render a neutral background, border, and foreground color when a hue is not provided', () => {
  const { colors, palette } = DEFAULT_THEME;
  const { container } = render(<StyledBase />);

  expect(container.firstChild).toHaveStyleRule('color', palette[colors.neutralHue][800]);
  expect(container.firstChild).toHaveStyleRule('border-color', palette[colors.neutralHue][300]);
  expect(container.firstChild).toHaveStyleRule('background-color', colors.background);
});

it('renders floating styling correctly', () => {
  const { container } = render(<StyledBase isFloating />);

  expect(container.firstChild).toHaveStyleRule('box-shadow', '0 20px 28px 0 rgba(4,68,77,0.15)');
});
