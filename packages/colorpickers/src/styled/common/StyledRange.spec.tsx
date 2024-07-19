/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { getRenderFn } from 'garden-test-utils';
import { StyledRange } from './StyledRange';
import { PALETTE } from '@zendeskgarden/react-theming';

describe('StyledRange', () => {
  it.each<['light' | 'dark', string]>([
    ['light', PALETTE.white],
    ['dark', PALETTE.grey[900]]
  ])('renders %s mode thumb background color', (mode, color) => {
    const { container } = getRenderFn(mode)(<StyledRange />);

    expect(container.firstChild).toHaveStyleRule('background-color', color, {
      modifier: '&::-webkit-slider-thumb'
    });
  });

  it.each<['light' | 'dark', string]>([
    ['light', PALETTE.grey[100]],
    ['dark', PALETTE.grey[1000]]
  ])('renders %s mode thumb hover background color', (mode, color) => {
    const { container } = getRenderFn(mode)(<StyledRange />);

    expect(container.firstChild).toHaveStyleRule('background-color', color, {
      modifier: ':hover::-webkit-slider-thumb'
    });
  });

  it.each<['light' | 'dark', string]>([
    ['light', PALETTE.white],
    ['dark', PALETTE.grey[900]]
  ])('renders %s mode thumb active background color', (mode, color) => {
    const { container } = getRenderFn(mode)(<StyledRange />);

    expect(container.firstChild).toHaveStyleRule('background-color', color, {
      modifier: ':active::-webkit-slider-thumb'
    });
  });

  it.each<['light' | 'dark', string]>([
    ['light', PALETTE.white],
    ['dark', PALETTE.grey[900]]
  ])('renders %s mode thumb focus-visible background color', (mode, color) => {
    const { container } = getRenderFn(mode)(<StyledRange />);

    expect(container.firstChild).toHaveStyleRule('background-color', color, {
      modifier: ':focus-visible::-webkit-slider-thumb'
    });
  });
});
