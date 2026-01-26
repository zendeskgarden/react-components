/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render, renderRtl, screen } from 'garden-test-utils';
import React from 'react';

import { StyledOppositeContent } from './StyledOppositeContent';

describe('StyledOppositeContent', () => {
  it('renders default styling correctly', () => {
    render(<StyledOppositeContent>Exercise</StyledOppositeContent>);

    const oppositeContent = screen.getByText('Exercise');

    expect(oppositeContent).toHaveStyleRule('text-align', 'right');
  });

  it('renders RTL styling correctly', () => {
    renderRtl(<StyledOppositeContent>Exercise</StyledOppositeContent>);

    const oppositeContent = screen.getByText('Exercise');

    expect(oppositeContent).toHaveStyleRule('text-align', 'left');
  });
});
