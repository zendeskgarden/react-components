/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { DEFAULT_THEME, PALETTE, getColor } from '@zendeskgarden/react-theming';
import { getRenderFn, render } from 'garden-test-utils';
import { StyledDayCell } from './StyledDayCell';
import { StyledDayNumber } from './StyledDayNumber';

const FOCUS_SELECTOR = `${StyledDayCell}:focus-visible &`;

describe('StyledDayNumber', () => {
  it('renders as a plain div with no interactive role or tabIndex of its own', () => {
    const { container } = render(<StyledDayNumber $isCompact={false}>5</StyledDayNumber>);

    expect(container.firstChild!.nodeName).toBe('DIV');
    expect(container.firstChild).not.toHaveAttribute('role');
    expect(container.firstChild).not.toHaveAttribute('tabindex');
  });

  it('is a 40px circle by default', () => {
    const { container } = render(<StyledDayNumber $isCompact={false}>5</StyledDayNumber>);

    expect(container.firstChild).toHaveStyleRule('width', '40px');
    expect(container.firstChild).toHaveStyleRule('height', '40px');
    expect(container.firstChild).toHaveStyleRule('border-radius', '50%');
  });

  it('is a 32px circle when compact', () => {
    const { container } = render(<StyledDayNumber $isCompact>5</StyledDayNumber>);

    expect(container.firstChild).toHaveStyleRule('width', '32px');
    expect(container.firstChild).toHaveStyleRule('height', '32px');
  });

  it('is bold when the enclosing cell is aria-current="date"', () => {
    const { container } = render(<StyledDayNumber $isCompact={false}>5</StyledDayNumber>);

    expect(container.firstChild).toHaveStyleRule(
      'font-weight',
      String(DEFAULT_THEME.fontWeights.semibold),
      {
        modifier: `${StyledDayCell}[aria-current='date'] &`
      }
    );
  });

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: PALETTE.grey[700] },
    { mode: 'dark', color: PALETTE.grey[500] }
  ])('dims $mode mode foreground color for previous-month days', ({ mode, color }) => {
    const { container } = getRenderFn(mode)(
      <StyledDayNumber $isCompact={false} $isPreviousMonth>
        30
      </StyledDayNumber>
    );

    expect(container.firstChild).toHaveStyleRule('color', color, { modifier: '&&' });
  });

  it('does not dim the foreground color for the current month', () => {
    const { container } = render(<StyledDayNumber $isCompact={false}>5</StyledDayNumber>);

    expect(container.firstChild).not.toHaveStyleRule('color', PALETTE.grey[700]);
  });

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: PALETTE.blue[700] },
    { mode: 'dark', color: PALETTE.blue[600] }
  ])(
    'shows a primary $mode mode foreground for current-month days by default',
    ({ mode, color }) => {
      const { container } = getRenderFn(mode)(
        <StyledDayNumber $isCompact={false}>5</StyledDayNumber>
      );

      expect(container.firstChild).toHaveStyleRule('color', color, {
        modifier: `${StyledDayCell}:not([aria-current='date']) &`
      });
    }
  );

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: 'color-mix(in srgb, #1f73b7 16%, #fff)' },
    { mode: 'dark', color: 'color-mix(in srgb, #2694d6 16%, #151a1e)' }
  ])(
    'shows an opaque tinted $mode mode background when the enclosing cell is hovered and not selected',
    ({ mode, color }) => {
      const { container } = getRenderFn(mode)(
        <StyledDayNumber $isCompact={false}>5</StyledDayNumber>
      );

      expect(container.firstChild).toHaveStyleRule('background-color', color, {
        modifier: `${StyledDayCell}[aria-selected='false']:not([aria-disabled='true']):hover &`
      });
    }
  );

  it.each<{ mode: 'light' | 'dark'; color: string }>([
    { mode: 'light', color: 'color-mix(in srgb, #1f73b7 16%, #fff)' },
    { mode: 'dark', color: 'color-mix(in srgb, #2694d6 16%, #151a1e)' }
  ])(
    'shows the same $mode mode tinted background when the enclosing cell is keyboard-focused and not selected',
    ({ mode, color }) => {
      const { container } = getRenderFn(mode)(
        <StyledDayNumber $isCompact={false}>5</StyledDayNumber>
      );

      expect(container.firstChild).toHaveStyleRule('background-color', color, {
        modifier: `${StyledDayCell}[aria-selected='false']:not([aria-disabled='true']):focus-visible &`
      });
    }
  );

  it.each<{ mode: 'light' | 'dark'; background: string; color: string }>([
    { mode: 'light', background: '#1f73b7', color: '#fff' },
    { mode: 'dark', background: '#2694d6', color: '#151a1e' }
  ])(
    'shows a solid $mode mode background when the enclosing cell is selected, regardless of hover/focus state',
    ({ mode, background, color }) => {
      const { container } = getRenderFn(mode)(
        <StyledDayNumber $isCompact={false}>5</StyledDayNumber>
      );

      expect(container.firstChild).toHaveStyleRule('background-color', background, {
        modifier: `${StyledDayCell}[aria-selected='true'] &`
      });
      expect(container.firstChild).toHaveStyleRule('color', color, {
        modifier: `${StyledDayCell}[aria-selected='true'] &`
      });
    }
  );

  it('shows a pointer cursor by default', () => {
    const { container } = render(<StyledDayNumber $isCompact={false}>5</StyledDayNumber>);

    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer');
  });

  it('draws the themed focus ring on itself, scoped to the enclosing cell being keyboard-focused', () => {
    const { container } = render(<StyledDayNumber $isCompact={false}>5</StyledDayNumber>);

    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      expect.stringContaining(`${DEFAULT_THEME.shadowWidths.md} ${PALETTE.blue[700]}`),
      { modifier: FOCUS_SELECTOR }
    );
    expect(container.firstChild).toHaveStyleRule(
      'outline',
      expect.stringContaining('2px solid transparent'),
      { modifier: FOCUS_SELECTOR }
    );
  });

  it('does not transition, so its background change stays in sync with the day cell', () => {
    const { container } = render(<StyledDayNumber $isCompact={false}>5</StyledDayNumber>);

    expect(container.firstChild).toHaveStyleRule('transition', 'none');
  });

  it('dims the foreground color and shows a default cursor when the enclosing cell is aria-disabled', () => {
    const foreground = getColor({ theme: DEFAULT_THEME, variable: 'foreground.disabled' });
    const { container } = render(<StyledDayNumber $isCompact={false}>5</StyledDayNumber>);

    expect(container.firstChild).toHaveStyleRule('color', foreground, {
      modifier: `${StyledDayCell}[aria-disabled='true'] &`
    });
    expect(container.firstChild).toHaveStyleRule('cursor', 'default', {
      modifier: `${StyledDayCell}[aria-disabled='true'] &`
    });
  });

  it('does not tint the background on hover when the enclosing cell is aria-disabled', () => {
    const { container } = render(<StyledDayNumber $isCompact={false}>5</StyledDayNumber>);

    expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
      modifier: `${StyledDayCell}[aria-disabled='true']:hover &`
    });
  });
});
