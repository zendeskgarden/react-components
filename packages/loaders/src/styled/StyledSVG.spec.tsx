/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { getRenderFn, render } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { StyledSVG } from '.';

type Args = ['light' | 'dark', string];

describe('StyledSVG', () => {
  it('applies font-size if provided', () => {
    const { container } = render(
      <StyledSVG $width="0" $height="0" $fontSize="12px" data-garden-id="StyledSVG" />
    );

    expect(container.firstChild).toHaveStyleRule('font-size', '12px');
  });

  it('defaults font-size to inherit if not provided', () => {
    const { container } = render(<StyledSVG $width="0" $height="0" data-garden-id="StyledSVG" />);

    expect(container.firstChild).toHaveStyleRule('font-size', 'inherit');
  });

  it('applies color if provided', () => {
    const { container } = render(
      <StyledSVG $width="0" $height="0" $color="red" data-garden-id="StyledSVG" />
    );

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.red[700]);
  });

  it.each<Args>([
    ['light', 'inherit'],
    ['dark', 'inherit']
  ])('applies the default color in "%s" mode if none is provided', (mode, color) => {
    const { container } = getRenderFn(mode)(
      <StyledSVG $width="0" $height="0" data-garden-id="StyledSVG" />
    );

    expect(container.firstChild).toHaveStyleRule('color', color);
  });

  it('applies width and height if provided', () => {
    const width = '2em';
    const height = '4em';

    const { container } = render(
      <StyledSVG $width={width} $height={height} data-garden-id="StyledSVG" />
    );

    expect(container.firstChild).toHaveAttribute('viewBox', `0 0 ${width} ${height}`);
  });
});
