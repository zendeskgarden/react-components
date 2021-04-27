/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, screen } from 'garden-test-utils';
import { StyledLegend } from './StyledLegend';

describe('StyledLegend', () => {
  it('renders default styling', () => {
    render(<StyledLegend>Example Legend Text</StyledLegend>);

    const legend = screen.getByText('Example Legend Text');

    expect(legend).toHaveStyleRule('margin-bottom', '8px');
    expect(legend).not.toHaveStyleRule('clip', 'rect(0 0 0 0)');
  });

  it('renders compact styling', () => {
    render(<StyledLegend isCompact>Example Legend Text</StyledLegend>);

    const legend = screen.getByText('Example Legend Text');

    expect(legend).toHaveStyleRule('margin-bottom', '4px');
  });

  it('renders expected hidden styling', () => {
    render(<StyledLegend hidden>Example Legend Text</StyledLegend>);

    const legend = screen.getByText('Example Legend Text');

    expect(legend).toHaveStyleRule('clip', 'rect(0 0 0 0)', { modifier: '[hidden]' });
  });
});
