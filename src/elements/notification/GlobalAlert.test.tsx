/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { RTL_THEME, render } from '../../test/render';
import PALETTE from '../../theming/elements/palette';
import DEFAULT_THEME from '../../theming/elements/theme';
import { Type } from '../../types/elements';
import { GlobalAlert } from './GlobalAlert';

describe('GlobalAlert', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<GlobalAlert type="success" ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('has a default role attribute', () => {
    const { container } = render(<GlobalAlert type="error" />);

    expect(container.firstChild).toHaveAttribute('role', 'status');
  });

  it('can have its role attribute modified', () => {
    const { container } = render(<GlobalAlert type="info" role="alert" />);

    expect(container.firstChild).toHaveAttribute('role', 'alert');
  });

  it('can have its role attribute removed', () => {
    const { container } = render(<GlobalAlert type="info" role={null as any} />);

    expect(container.firstChild).not.toHaveAttribute('role');
  });

  describe('with subcomponents', () => {
    const TestComponent = ({ type = 'info' }: { type: Type }) => (
      <GlobalAlert type={type}>
        <GlobalAlert.Content>
          <GlobalAlert.Title>title</GlobalAlert.Title> content
        </GlobalAlert.Content>
        <GlobalAlert.Button>button</GlobalAlert.Button>
        <GlobalAlert.Close />
      </GlobalAlert>
    );

    it('renders in RTL mode', () => {
      const { getByText, container } = render(<TestComponent type="info" />, {
        theme: RTL_THEME
      });

      expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
      expect(getByText('title')).toHaveStyleRule('margin-left', '8px');
      expect(getByText('button')).toHaveStyleRule('margin', '-6px 8px -6px 0');
    });
  });

  it.each<{ type: Type; color: string }>([
    { type: 'success', color: PALETTE.green[700] },
    { type: 'error', color: PALETTE.red[700] },
    { type: 'warning', color: PALETTE.yellow[300] },
    { type: 'info', color: PALETTE.blue[300] }
  ])('renders $type background color', ({ type, color }) => {
    const { container } = render(<GlobalAlert type={type} />);

    expect(container.firstChild).toHaveStyleRule('background-color', color);
  });

  it.each<{ type: Type; color: string }>([
    { type: 'success', color: PALETTE.green[100] },
    { type: 'error', color: PALETTE.red[100] },
    { type: 'warning', color: PALETTE.yellow[800] },
    { type: 'info', color: PALETTE.blue[800] }
  ])('renders $type foreground color', ({ type, color }) => {
    const { container } = render(<GlobalAlert type={type} />);

    expect(container.firstChild).toHaveStyleRule('color', color);
  });

  it.each<{ type: Type; color: string }>([
    { type: 'success', color: PALETTE.green[800] },
    { type: 'error', color: PALETTE.red[800] },
    { type: 'warning', color: PALETTE.yellow[400] },
    { type: 'info', color: PALETTE.blue[400] }
  ])('renders $type border color', ({ type, color }) => {
    const { container } = render(<GlobalAlert type={type} />);

    expect(container.firstChild).toHaveStyleRule(
      'box-shadow',
      `inset 0 -${DEFAULT_THEME.borderWidths.sm} 0 ${color}`
    );
  });

  it.each<{ type: Type; color: string }>([
    { type: 'success', color: PALETTE.green[300] },
    { type: 'error', color: PALETTE.red[300] },
    { type: 'warning', color: PALETTE.yellow[700] },
    { type: 'info', color: PALETTE.blue[700] }
  ])('renders $type icon color', ({ type, color }) => {
    const { container } = render(<GlobalAlert type={type} />);

    expect(
      container.querySelector('[data-garden-id="notifications.global_alert.icon"]')
    ).toHaveStyleRule('color', color);
  });

  it('renders the icon in a 20px slot', () => {
    const { container } = render(<GlobalAlert type="info" />);
    const icon = container.querySelector('[data-garden-id="notifications.global_alert.icon"]');

    expect(icon).toHaveStyleRule('width', DEFAULT_THEME.space.md);
    expect(icon).toHaveStyleRule('height', DEFAULT_THEME.space.md);
  });

  it('renders the anchor focus indicator in the anchor shape', () => {
    const { container } = render(<GlobalAlert type="info" />);

    expect(container.firstChild).toHaveStyleRule('text-decoration', 'underline', {
      modifier: '&& a'
    });
    expect(container.firstChild).not.toHaveStyleRule('border-radius', undefined, {
      modifier: '&& a'
    });
    expect(container.firstChild).toHaveStyleRule('border-radius', DEFAULT_THEME.borderRadii.sm, {
      modifier: '& a:focus-visible'
    });
    expect(container.firstChild).toHaveStyleRule('outline-color', PALETTE.grey[900], {
      modifier: '& a:focus-visible'
    });
    expect(container.firstChild).toHaveStyleRule('outline-offset', DEFAULT_THEME.shadowWidths.sm, {
      modifier: '& a:focus-visible'
    });
  });
});
