/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { StyledBase } from './StyledBase';

describe('StyledBase', () => {
  it('should renders the correct background, border, and foreground color for a given type', () => {
    const { container } = render(<StyledBase $type="success" />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.green[700]);
    expect(container.firstChild).toHaveStyleRule('border-color', PALETTE.green[300]);
    expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.green[100]);
  });

  it('renders neutral colors given no type', () => {
    const { container } = render(<StyledBase />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.grey[900]);
    expect(container.firstChild).toHaveStyleRule('border-color', PALETTE.grey[300]);
    expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.white as string);
  });

  it('renders floating styling correctly', () => {
    const { container } = render(<StyledBase $isFloating />);

    expect(container.firstChild).toHaveStyleRule('box-shadow', expect.any(String));
  });
});
