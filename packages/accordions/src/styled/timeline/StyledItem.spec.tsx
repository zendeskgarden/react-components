/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl, screen } from 'garden-test-utils';
import { StyledTimelineItem } from './StyledItem';

describe('StyledItem', () => {
  it('renders default styling correctly', () => {
    render(<StyledTimelineItem />);

    const item = screen.getByRole('listitem');

    expect(item).not.toHaveStyleRule('flex-direction', 'row-reverse', {
      modifier: '&:nth-child(even)'
    });

    expect(item).not.toHaveStyleRule('flex', '1', {
      modifier: '&::before'
    });

    expect(item).not.toHaveStyleRule('content', "''", {
      modifier: '&::before'
    });

    expect(item).not.toHaveStyleRule('padding', '16px', {
      modifier: '&::before'
    });
  });

  it('renders RTL & alternate styling correctly', () => {
    renderRtl(<StyledTimelineItem $isAlternate />);

    const item = screen.getByRole('listitem');

    expect(item).toHaveStyleRule('flex-direction', 'row-reverse', {
      modifier: '&:nth-child(even)'
    });

    expect(item).toHaveStyleRule('flex', '1', {
      modifier: '&::before'
    });

    expect(item).toHaveStyleRule('content', "''", {
      modifier: '&::before'
    });

    expect(item).toHaveStyleRule('padding', '16px', {
      modifier: '&::before'
    });
  });
});
