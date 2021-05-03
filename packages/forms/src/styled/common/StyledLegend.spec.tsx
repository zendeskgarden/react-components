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
  it('renders the expected element', () => {
    const { container } = render(<StyledLegend />);

    expect(container.firstChild!.nodeName).toBe('LEGEND');
  });

  it('renders default styling', () => {
    render(<StyledLegend>Example Legend Text</StyledLegend>);

    const legend = screen.getByText('Example Legend Text');

    expect(legend).toHaveStyleRule('margin-bottom', '8px');
  });

  it('renders compact styling', () => {
    render(<StyledLegend isCompact>Example Legend Text</StyledLegend>);

    const legend = screen.getByText('Example Legend Text');

    expect(legend).toHaveStyleRule('margin-bottom', '4px');
  });
});
