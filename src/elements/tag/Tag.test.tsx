/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { RTL_THEME, DARK_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders medium size by default', () => {
    const { container } = render(<Tag />);

    expect(container.firstChild).toHaveStyleRule('height', '20px');
  });

  it('applies correct styling with RTL locale', () => {
    const { container } = render(<Tag />, {
      theme: RTL_THEME
    });

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = createRef<HTMLDivElement>();
    const { container } = render(<Tag ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  describe('Sizes', () => {
    it('renders small styling if provided', () => {
      const { container } = render(<Tag size="small" />);

      expect(container.firstChild).toHaveStyleRule('height', `${DEFAULT_THEME.space.base * 4}px`);
      expect(container.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.xs);
    });

    it('renders large styling if provided', () => {
      const { container } = render(<Tag size="large" />);

      expect(container.firstChild).toHaveStyleRule('height', `${DEFAULT_THEME.space.base * 8}px`);
      expect(container.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.sm);
    });
  });

  describe('Pill', () => {
    it('renders pill styling', () => {
      const { container } = render(<Tag isPill />);

      expect(container.firstChild).toHaveStyleRule('border-radius', '100px');
      expect(container.firstChild).toHaveStyleRule(
        'min-width',
        `${DEFAULT_THEME.space.base * 7.5}px`
      );
    });

    it('renders small pill styling', () => {
      const { container } = render(<Tag isPill size="small" />);

      expect(container.firstChild).toHaveStyleRule(
        'min-width',
        `${DEFAULT_THEME.space.base * 6}px`
      );
    });

    it('renders large pill styling', () => {
      const { container } = render(<Tag isPill size="large" />);

      expect(container.firstChild).toHaveStyleRule(
        'min-width',
        `${DEFAULT_THEME.space.base * 12}px`
      );
    });
  });

  it('renders round styling if provided', () => {
    const { container } = render(<Tag isRound />);

    expect(container.firstChild).toHaveStyleRule('border-radius', '50%');
  });

  it('renders regular weight styling if provided', () => {
    const { container } = render(<Tag isRegular />);

    expect(container.firstChild).toHaveStyleRule('font-weight', undefined);
  });

  describe('Hues', () => {
    const color = (theme: typeof DEFAULT_THEME, variable: string, options = {}) =>
      getColor({ variable, theme, ...options });
    const onEmphasis = (theme: typeof DEFAULT_THEME) => color(theme, 'foreground.onEmphasis');

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders the default hue in %s mode', (_, theme) => {
      const { container } = render(<Tag />, { theme });

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        getColor({ theme, hue: 'neutralHue', light: { shade: 200 }, dark: { shade: 800 } })
      );
      expect(container.firstChild).toHaveStyleRule('color', color(theme, 'foreground.default'));
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders the "grey" hue in %s mode', (_, theme) => {
      const { container } = render(<Tag hue="grey" />, { theme });

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        color(theme, 'background.emphasis', { dark: { offset: -300 } })
      );
      expect(container.firstChild).toHaveStyleRule('color', onEmphasis(theme));
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders the "blue" hue in %s mode', (_, theme) => {
      const { container } = render(<Tag hue="blue" />, { theme });

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        color(theme, 'background.primaryEmphasis')
      );
      expect(container.firstChild).toHaveStyleRule('color', onEmphasis(theme));
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders the "red" hue in %s mode', (_, theme) => {
      const { container } = render(<Tag hue="red" />, { theme });

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        color(theme, 'background.dangerEmphasis')
      );
      expect(container.firstChild).toHaveStyleRule('color', onEmphasis(theme));
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders the "green" hue in %s mode', (_, theme) => {
      const { container } = render(<Tag hue="green" />, { theme });

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        color(theme, 'background.successEmphasis')
      );
      expect(container.firstChild).toHaveStyleRule('color', onEmphasis(theme));
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders the "yellow" hue in %s mode', (_, theme) => {
      const { container } = render(<Tag hue="yellow" />, { theme });
      const foregroundColor =
        theme.colors.base === 'light'
          ? color(theme, 'foreground.warningEmphasis')
          : onEmphasis(theme);

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        getColor({ theme, hue: 'warningHue', shade: 400 })
      );
      expect(container.firstChild).toHaveStyleRule('color', foregroundColor);
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders the "kale" hue in %s mode', (_, theme) => {
      const { container } = render(<Tag hue="kale" />, { theme });

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        getColor({ theme, hue: 'chromeHue', dark: { shade: 500 }, light: { shade: 800 } })
      );
      expect(container.firstChild).toHaveStyleRule('color', onEmphasis(theme));
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders a custom hue in %s mode', (_, theme) => {
      const { container } = render(<Tag hue="azure" />, { theme });

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        getColor({ theme, hue: 'azure' })
      );
    });

    it('renders a dark foreground on a light custom hue', () => {
      const { container } = render(<Tag hue="white" />);

      expect(container.firstChild).toHaveStyleRule('color', onEmphasis(DARK_THEME));
    });

    it('renders a light foreground on a dark custom hue', () => {
      const { container } = render(<Tag hue="black" />);

      expect(container.firstChild).toHaveStyleRule('color', onEmphasis(DEFAULT_THEME));
    });
  });
});
