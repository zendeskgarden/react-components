/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { PALETTE_V8 } from '@zendeskgarden/react-theming';
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

    expect(container.firstChild).toHaveStyleRule('color', PALETTE_V8.grey[600]);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE_V8.grey[800], {
      modifier: ':hover'
    });
  });

  it('should render the correct styling for a given hue', () => {
    const { container } = render(<StyledClose hue="successHue" />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE_V8.green[600]);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE_V8.green[800], {
      modifier: ':hover'
    });
  });

  // The color yellow requires a darker shade for legibility
  it('should render the correct styling for a warning hue', () => {
    const { container } = render(<StyledClose hue="warningHue" />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE_V8.yellow[700]);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE_V8.yellow[800], {
      modifier: ':hover'
    });
  });
});
