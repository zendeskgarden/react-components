/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledHueRange } from './StyledHueRange';

describe('StyledHue', () => {
  it('renders default style', () => {
    const { container } = render(<StyledHueRange />);
    const modifiers = ['&::-ms-track', '&::-moz-range-track', '&::-webkit-slider-runnable-track'];

    modifiers.forEach(modifier => {
      expect(container.firstChild).toHaveStyleRule(
        'background',
        'linear-gradient( to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100% )',
        { modifier }
      );
    });
  });

  it('renders RTL style', () => {
    const { container } = renderRtl(<StyledHueRange />);
    const modifiers = ['&::-ms-track', '&::-moz-range-track', '&::-webkit-slider-runnable-track'];

    modifiers.forEach(modifier => {
      expect(container.firstChild).toHaveStyleRule(
        'background',
        'linear-gradient( to left, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100% )',
        { modifier }
      );
    });
  });
});
