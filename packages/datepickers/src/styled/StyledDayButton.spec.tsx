/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { PALETTE, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { getRenderFn, render } from 'garden-test-utils';
import { StyledDayButton } from './StyledDayButton';

describe('StyledDayButton', () => {
  it('is a 40px circle by default', () => {
    const { container } = render(<StyledDayButton $isCompact={false}>5</StyledDayButton>);

    expect(container.firstChild).toHaveStyleRule('width', '40px');
    expect(container.firstChild).toHaveStyleRule('height', '40px');
    expect(container.firstChild).toHaveStyleRule('border-radius', '50%');
  });

  it('is a 32px circle when compact', () => {
    const { container } = render(<StyledDayButton $isCompact>5</StyledDayButton>);

    expect(container.firstChild).toHaveStyleRule('width', '32px');
    expect(container.firstChild).toHaveStyleRule('height', '32px');
  });

  it('is bold when it is today (aria-current="date")', () => {
    const { container } = render(<StyledDayButton $isCompact={false}>5</StyledDayButton>);

    expect(container.firstChild).toHaveStyleRule(
      'font-weight',
      String(DEFAULT_THEME.fontWeights.semibold),
      {
        modifier: "&[aria-current='date']"
      }
    );
  });

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: PALETTE.grey[700] },
    { mode: 'dark', color: PALETTE.grey[500] }
  ])('dims $mode mode foreground color for previous-month days', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledDayButton $isCompact={false} $isPreviousMonth>
        30
      </StyledDayButton>
    );

    expect(container.firstChild).toHaveStyleRule('color', color, { modifier: '&&:not(:disabled)' });
  });

  it('does not dim the foreground color for the current month', () => {
    const { container } = render(<StyledDayButton $isCompact={false}>5</StyledDayButton>);

    expect(container.firstChild).not.toHaveStyleRule('color', PALETTE.grey[700]);
  });

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: 'color-mix(in srgb, #1f73b7 16%, #fff)' },
    { mode: 'dark', color: 'color-mix(in srgb, #2694d6 16%, #151a1e)' }
  ])('shows an opaque tinted $mode mode hover background when not pressed', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledDayButton $isCompact={false}>5</StyledDayButton>
    );

    expect(container.firstChild).toHaveStyleRule('background-color', color, {
      modifier: "&&[aria-pressed='false']:not(:disabled):hover"
    });
  });

  it('does not transition, so its background change stays in sync with the day cell', () => {
    const { container } = render(<StyledDayButton $isCompact={false}>5</StyledDayButton>);

    expect(container.firstChild).toHaveStyleRule('transition', 'none');
  });
});
