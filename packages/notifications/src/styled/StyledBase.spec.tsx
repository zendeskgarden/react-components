/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { PALETTE_V8 } from '@zendeskgarden/react-theming';
import { StyledBase } from './StyledBase';

describe('StyledBase', () => {
  it('should renders the correct background, border, and foreground color for a given hue', () => {
    const { container } = render(<StyledBase hue="successHue" />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE_V8.green[700]);
    expect(container.firstChild).toHaveStyleRule('border-color', PALETTE_V8.green[300]);
    expect(container.firstChild).toHaveStyleRule('background-color', PALETTE_V8.green[100]);
  });

  it('should render a neutral background, border, and foreground color when a hue is not provided', () => {
    const { container } = render(<StyledBase />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE_V8.grey[800]);
    expect(container.firstChild).toHaveStyleRule('border-color', PALETTE_V8.grey[300]);
    expect(container.firstChild).toHaveStyleRule('background-color', PALETTE_V8.white as string);
  });

  it('renders floating styling correctly', () => {
    const { container } = render(<StyledBase isFloating />);

    expect(container.firstChild).toHaveStyleRule('box-shadow', expect.any(String));
  });
});
