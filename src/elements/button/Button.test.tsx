/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';
import TestIcon from 'svg-icons-legacy/src/16/gear-stroke.svg';

import { RTL_THEME, DARK_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { COMPONENT_ID } from '../../views/button/StyledButton';
import { Button } from './Button';

describe('Button', () => {
  it('is rendered as a button', () => {
    const { container } = render(<Button />);

    expect(container.firstChild!.nodeName).toBe('BUTTON');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLButtonElement>();
    const { container } = render(<Button ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders link styling if provided', () => {
    const { container } = render(<Button isLink />);

    expect(container.firstChild).toHaveStyleRule('text-decoration', 'underline');
  });

  describe('`type` attribute', () => {
    it('renders default type of "button"', () => {
      const { container } = render(<Button />);

      expect(container.firstChild).toHaveAttribute('type', 'button');
    });

    it('renders default type of "button" if explicitly undefined', () => {
      const { container } = render(<Button type={undefined} />);

      expect(container.firstChild).toHaveAttribute('type', 'button');
    });

    it('renders custom type if provided', () => {
      const { container } = render(<Button type="submit" />);

      expect(container.firstChild).toHaveAttribute('type', 'submit');
    });
  });

  describe('`data-garden-id` attribute', () => {
    it('sets a default data-garden-id attribute', () => {
      const { getByRole } = render(<Button />);

      expect(getByRole('button')).toHaveAttribute('data-garden-id', COMPONENT_ID);
    });

    it('does not let props override the garden attributes', () => {
      const { getByRole } = render(
        <Button data-garden-id="myCoolButton" data-garden-version="0.0.0" />
      );

      expect(getByRole('button')).toHaveAttribute('data-garden-id', COMPONENT_ID);
      expect(getByRole('button')).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    });
  });

  describe('Sizes', () => {
    it('renders small styling if provided', () => {
      const { container } = render(<Button size="small" />);

      expect(container.firstChild).toHaveStyleRule('height', `${DEFAULT_THEME.space.base * 8}px`);
      expect(container.firstChild).toHaveStyleRule('font-size', `${DEFAULT_THEME.fontSizes.sm}`);
    });

    it('renders large styling if provided', () => {
      const { container } = render(<Button size="large" />);

      expect(container.firstChild).toHaveStyleRule('height', `${DEFAULT_THEME.space.base * 12}px`);
      expect(container.firstChild).toHaveStyleRule('font-size', `${DEFAULT_THEME.fontSizes.md}`);
    });
  });

  describe('Colors', () => {
    const color = (theme: typeof DEFAULT_THEME, variable: string, options = {}) =>
      getColor({ variable, theme, ...options });
    const neutral = (theme: typeof DEFAULT_THEME, lightShade: number, darkShade: number) =>
      getColor({
        theme,
        hue: 'neutralHue',
        light: { shade: lightShade },
        dark: { shade: darkShade }
      });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders primary styling in $0 mode', (_, theme) => {
      const { container } = render(<Button isPrimary />, { theme });

      expect(container.firstChild).toHaveStyleRule('background-color', neutral(theme, 900, 300));
      expect(container.firstChild).toHaveStyleRule('color', color(theme, 'foreground.onEmphasis'));
      expect(container.firstChild).toHaveStyleRule('background-color', neutral(theme, 800, 200), {
        modifier: '&:hover'
      });
      expect(container.firstChild).toHaveStyleRule('background-color', neutral(theme, 700, 100), {
        modifier: '&:active'
      });
    });

    it('renders primary danger styling if provided', () => {
      const { container } = render(<Button isPrimary isDanger />);

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        color(DEFAULT_THEME, 'background.dangerEmphasis')
      );
    });

    it('renders primary neutral styling if provided', () => {
      const { container } = render(<Button isPrimary isNeutral />);

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        neutral(DEFAULT_THEME, 900, 300)
      );
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders danger styling in $0 mode', (_, theme) => {
      const { container } = render(<Button isDanger />, { theme });

      expect(container.firstChild).toHaveStyleRule(
        'border-color',
        color(theme, 'border.dangerEmphasis')
      );
      expect(container.firstChild).toHaveStyleRule('color', color(theme, 'foreground.danger'));
      expect(container.firstChild).toHaveStyleRule(
        'border-color',
        color(theme, 'border.dangerEmphasis', { light: { offset: 100 }, dark: { offset: -100 } }),
        { modifier: '&:hover' }
      );
      expect(container.firstChild).toHaveStyleRule(
        'border-color',
        color(theme, 'border.dangerEmphasis', { light: { offset: 200 }, dark: { offset: -200 } }),
        { modifier: '&:active' }
      );
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders danger neutral styling in $0 mode', (_, theme) => {
      const { container } = render(<Button isDanger isNeutral />, { theme });

      expect(container.firstChild).toHaveStyleRule('color', color(theme, 'foreground.danger'));
      expect(container.firstChild).toHaveStyleRule(
        'border-color',
        color(theme, 'border.dangerEmphasis'),
        { modifier: '&:focus-visible' }
      );
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders neutral styling in $0 mode', (_, theme) => {
      const { container } = render(<Button isNeutral />, { theme });

      expect(container.firstChild).toHaveStyleRule('border-color', neutral(theme, 500, 600));
      expect(container.firstChild).toHaveStyleRule('color', color(theme, 'foreground.default'));
      expect(container.firstChild).toHaveStyleRule('border-color', neutral(theme, 600, 500), {
        modifier: '&:hover'
      });
      expect(container.firstChild).toHaveStyleRule('border-color', neutral(theme, 700, 400), {
        modifier: '&:active'
      });
    });
  });

  describe('Icons', () => {
    it('successfully renders start and end icons', () => {
      const { getByTestId } = render(
        <Button>
          <Button.StartIcon>
            <TestIcon data-test-id="start" />
          </Button.StartIcon>
          <Button.EndIcon>
            <TestIcon data-test-id="end" />
          </Button.EndIcon>
        </Button>
      );

      expect(getByTestId('start')).not.toBeNull();
      expect(getByTestId('end')).not.toBeNull();
    });

    it('renders icon rotation', () => {
      const { getByTestId } = render(
        <Button>
          <Button.StartIcon isRotated>
            <TestIcon data-test-id="icon" />
          </Button.StartIcon>
        </Button>
      );

      expect(getByTestId('icon')).toHaveStyleRule('transform', 'rotate(+180deg)');
    });

    it('renders RTL icon rotation', () => {
      const { getByTestId } = render(
        <Button>
          <Button.EndIcon isRotated>
            <TestIcon data-test-id="icon" />
          </Button.EndIcon>
        </Button>,
        {
          theme: RTL_THEME
        }
      );

      expect(getByTestId('icon')).toHaveStyleRule('transform', 'rotate(-180deg)');
    });
  });
});
