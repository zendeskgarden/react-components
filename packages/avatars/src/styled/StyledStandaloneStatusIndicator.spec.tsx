/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { StyledStandaloneStatusIndicator } from './StyledStandaloneStatusIndicator';

describe('StyledStandaloneStatusIndicator', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledStandaloneStatusIndicator />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders medium size by default', () => {
    const { container } = render(<StyledStandaloneStatusIndicator />);

    expect(container.firstChild).toHaveStyleRule('height', '12px');
  });

  it('renders medium margin-top when size is explicitly undefined', () => {
    const { container } = render(<StyledStandaloneStatusIndicator $size={undefined} />);
    const expectedMargin = `calc((${DEFAULT_THEME.lineHeights.md} - 16px) / 2)`;

    expect(container.firstChild).toHaveStyleRule('margin-top', expectedMargin);
  });

  it('renders small size', () => {
    const { container } = render(<StyledStandaloneStatusIndicator $size="small" />);

    expect(container.firstChild).toHaveStyleRule('height', '8px');
  });
});
