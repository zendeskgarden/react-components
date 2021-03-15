/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledSlider } from './StyledSlider';
import { StyledLabel } from '../common/StyledLabel';
import { StyledHint } from '../common/StyledHint';
import { StyledMessage } from '../common/StyledMessage';

describe('StyledSlider', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledSlider />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  describe('Adjacency', () => {
    it('renders as expected after a label', () => {
      const { getByTestId } = render(
        <>
          <StyledLabel />
          <StyledSlider data-test-id="slider" />
        </>
      );
      const slider = getByTestId('slider');

      expect(slider).toHaveStyleRule('margin-top', '8px', {
        modifier: `${StyledLabel}:not([hidden]) + &`
      });
    });

    it('renders as expected after a hint', () => {
      const { getByTestId } = render(
        <>
          <StyledHint />
          <StyledSlider data-test-id="slider" />
        </>
      );
      const slider = getByTestId('slider');

      expect(slider).toHaveStyleRule('margin-top', '8px', {
        modifier: `${StyledLabel}:not([hidden]) + &`
      });
    });

    it('renders as expected after a message', () => {
      const { getByTestId } = render(
        <>
          <StyledMessage />
          <StyledSlider data-test-id="slider" />
        </>
      );
      const slider = getByTestId('slider');

      expect(slider).toHaveStyleRule('margin-top', '8px', {
        modifier: `${StyledLabel}:not([hidden]) + &`
      });
    });
  });
});
