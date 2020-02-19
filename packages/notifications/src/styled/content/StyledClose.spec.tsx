/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledClose } from './StyledClose';

describe('StyledClose', () => {
  it('should render with the correct styling for RTL writing systems', () => {
    const { container } = renderRtl(<StyledClose />);

    expect(container.firstChild).toHaveStyleRule('left', '4px');
    expect(container.firstChild).not.toHaveStyleRule('right');
  });

  it('should render with the correct styling for LTR writing systems', () => {
    const { container } = render(<StyledClose />);

    expect(container.firstChild).toHaveStyleRule('right', '4px');
    expect(container.firstChild).not.toHaveStyleRule('left');
  });

  it('should render neutral fallback hue when hue prop is not provided', () => {
    const { container } = render(<StyledClose />);
    const { colors, palette } = DEFAULT_THEME;
    const { neutralHue } = colors;

    expect(container.firstChild).toHaveStyleRule('color', palette[neutralHue][600]);

    expect(container.firstChild).toHaveStyleRule('color', palette[neutralHue][800], {
      modifier: ':hover'
    });
  });

  it('should render the correct styling for a given hue', () => {
    const { container } = render(<StyledClose hue="successHue" />);
    const { colors, palette } = DEFAULT_THEME;
    const { successHue } = colors;

    expect(container.firstChild).toHaveStyleRule('color', palette[successHue][600]);

    expect(container.firstChild).toHaveStyleRule('color', palette[successHue][800], {
      modifier: ':hover'
    });
  });

  // The color yellow requires a darker shade for legibility
  it('should render the correct styling for a warning hue', () => {
    const { container } = render(<StyledClose hue="warningHue" />);
    const { colors, palette } = DEFAULT_THEME;
    const { warningHue } = colors;

    expect(container.firstChild).toHaveStyleRule('color', palette[warningHue][700]);

    expect(container.firstChild).toHaveStyleRule('color', palette[warningHue][800], {
      modifier: ':hover'
    });
  });
});
