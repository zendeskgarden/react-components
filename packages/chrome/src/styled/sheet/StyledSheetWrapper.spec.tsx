/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl, screen } from 'garden-test-utils';

import { StyledSheetWrapper } from './StyledSheetWrapper';

describe('StyledSheetWrapper', () => {
  const sheetWrapperText = 'StyledSheetWrapper';

  it('renders correctly in rtl mode', () => {
    renderRtl(<StyledSheetWrapper $placement="end">{sheetWrapperText}</StyledSheetWrapper>);

    expect(screen.getByText(sheetWrapperText)).toHaveStyleRule('transform', 'translateX(-100%)');
  });

  it('renders correctly when placement is set to "start"', () => {
    render(<StyledSheetWrapper $placement="start">{sheetWrapperText}</StyledSheetWrapper>);

    expect(screen.getByText(sheetWrapperText)).toHaveStyleRule('transform', 'translateX(-100%)');
  });

  it('renders correctly when placement is set to "end"', () => {
    render(<StyledSheetWrapper $placement="end">{sheetWrapperText}</StyledSheetWrapper>);

    expect(screen.getByText(sheetWrapperText)).toHaveStyleRule('transform', 'translateX(100%)');
  });

  it('renders default styling correctly', () => {
    render(<StyledSheetWrapper $isOpen>{sheetWrapperText}</StyledSheetWrapper>);

    const div = screen.getByText(sheetWrapperText);

    expect(div).toHaveStyleRule('transform', 'translateX(0)');
    expect(div).not.toHaveStyleRule('transition', 'transform 250ms ease-in-out');
  });

  it('renders styling correctly when animated', () => {
    render(<StyledSheetWrapper $isAnimated>{sheetWrapperText}</StyledSheetWrapper>);

    expect(screen.getByText(sheetWrapperText)).toHaveStyleRule(
      'transition',
      'transform 250ms ease-in-out'
    );
  });

  it('renders styling correctly when given a size', () => {
    const sheetSize = '200px';

    render(<StyledSheetWrapper $size={sheetSize}>{sheetWrapperText}</StyledSheetWrapper>);

    expect(screen.getByText(sheetWrapperText)).toHaveStyleRule('min-width', sheetSize);
  });
});
