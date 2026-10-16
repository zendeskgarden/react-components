/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { DARK_THEME, RTL_THEME, render } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import DEFAULT_THEME from '../../theming/elements/theme';
import { Type } from '../../types/elements';
import { Alert } from './Alert';

describe('Alert', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<Alert type="success" ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('has a default role attribute', () => {
    const { container } = render(<Alert type="error" />);

    expect(container.firstChild).toHaveAttribute('role', 'alert');
  });

  it('can have its role attribute modified', () => {
    // eslint-disable-next-line jsx-a11y/prefer-tag-over-role
    const { container } = render(<Alert type="info" role="status" />);

    expect(container.firstChild).toHaveAttribute('role', 'status');
  });

  it('can have its role attribute removed', () => {
    const { container } = render(<Alert type="info" role={null as any} />);

    expect(container.firstChild).not.toHaveAttribute('role');
  });

  it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
    { mode: 'light', type: 'success', color: PALETTE.green[100] },
    { mode: 'dark', type: 'success', color: PALETTE.green[1000] },
    { mode: 'light', type: 'error', color: PALETTE.red[100] },
    { mode: 'dark', type: 'error', color: PALETTE.red[1000] },
    { mode: 'light', type: 'warning', color: PALETTE.yellow[100] },
    { mode: 'dark', type: 'warning', color: PALETTE.yellow[1000] },
    { mode: 'light', type: 'info', color: PALETTE.grey[100] },
    { mode: 'dark', type: 'info', color: PALETTE.grey[1000] }
  ])('renders $mode mode $type background color', ({ mode, type, color }) => {
    const { container } = render(<Alert type={type} />, {
      theme: mode === 'dark' ? DARK_THEME : undefined
    });

    expect(container.firstChild).toHaveStyleRule('background-color', color);
  });

  it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
    { mode: 'light', type: 'success', color: PALETTE.green[300] },
    { mode: 'dark', type: 'success', color: PALETTE.green[900] },
    { mode: 'light', type: 'error', color: PALETTE.red[300] },
    { mode: 'dark', type: 'error', color: PALETTE.red[900] },
    { mode: 'light', type: 'warning', color: PALETTE.yellow[300] },
    { mode: 'dark', type: 'warning', color: PALETTE.yellow[900] },
    { mode: 'light', type: 'info', color: PALETTE.grey[300] },
    { mode: 'dark', type: 'info', color: PALETTE.grey[800] }
  ])('renders $mode mode $type border color', ({ mode, type, color }) => {
    const { container } = render(<Alert type={type} />, {
      theme: mode === 'dark' ? DARK_THEME : undefined
    });

    expect(container.firstChild).toHaveStyleRule('border-color', color);
  });

  it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
    { mode: 'light', type: 'success', color: PALETTE.green[700] },
    { mode: 'dark', type: 'success', color: PALETTE.green[400] },
    { mode: 'light', type: 'error', color: PALETTE.red[700] },
    { mode: 'dark', type: 'error', color: PALETTE.red[400] },
    { mode: 'light', type: 'warning', color: PALETTE.yellow[700] },
    { mode: 'dark', type: 'warning', color: PALETTE.yellow[400] },
    { mode: 'light', type: 'info', color: PALETTE.grey[700] },
    { mode: 'dark', type: 'info', color: PALETTE.grey[500] }
  ])('renders $mode mode $type foreground color', ({ mode, type, color }) => {
    const { container } = render(<Alert type={type} />, {
      theme: mode === 'dark' ? DARK_THEME : undefined
    });

    expect(container.firstChild).toHaveStyleRule('color', color);
  });

  it.each<{ mode: 'light' | 'dark'; type: Type; color: string }>([
    { mode: 'light', type: 'success', color: PALETTE.green[700] },
    { mode: 'dark', type: 'success', color: PALETTE.green[400] },
    { mode: 'light', type: 'error', color: PALETTE.red[700] },
    { mode: 'dark', type: 'error', color: PALETTE.red[400] },
    { mode: 'light', type: 'warning', color: PALETTE.yellow[700] },
    { mode: 'dark', type: 'warning', color: PALETTE.yellow[400] },
    { mode: 'light', type: 'info', color: PALETTE.grey[700] },
    { mode: 'dark', type: 'info', color: PALETTE.grey[500] }
  ])('renders $mode mode $type icon color', ({ mode, type, color }) => {
    const { container } = render(<Alert type={type} />, {
      theme: mode === 'dark' ? DARK_THEME : undefined
    });

    expect(container.querySelector('[data-garden-id="notifications.icon"]')).toHaveStyleRule(
      'color',
      color
    );
  });

  it('renders the icon at the start edge in LTR', () => {
    const { container } = render(<Alert type="info" />);
    const icon = container.querySelector('[data-garden-id="notifications.icon"]');

    expect(icon).toHaveStyleRule('left', `${DEFAULT_THEME.space.base * 4}px`);
    expect(icon).not.toHaveStyleRule('right');
  });

  it('renders the icon at the start edge in RTL', () => {
    const { container } = render(<Alert type="info" />, { theme: RTL_THEME });
    const icon = container.querySelector('[data-garden-id="notifications.icon"]');

    expect(icon).toHaveStyleRule('right', `${DEFAULT_THEME.space.base * 4}px`);
    expect(icon).not.toHaveStyleRule('left');
  });
});
