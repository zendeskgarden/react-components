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
import { StyledAvatar } from '../../views/tag/StyledAvatar';
import { StyledClose } from '../../views/tag/StyledClose';
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
    it('renders pill styling by default', () => {
      const { container } = render(<Tag />);

      expect(container.firstChild).toHaveStyleRule('border-radius', '100px');
      expect(container.firstChild).toHaveStyleRule(
        'min-width',
        `${DEFAULT_THEME.space.base * 7.5}px`
      );
    });

    it('renders pill styling', () => {
      const { container } = render(<Tag isPill />);

      expect(container.firstChild).toHaveStyleRule('border-radius', '100px');
      expect(container.firstChild).toHaveStyleRule(
        'min-width',
        `${DEFAULT_THEME.space.base * 7.5}px`
      );
    });

    it('renders square styling if pill is disabled', () => {
      const { container } = render(<Tag isPill={false} />);

      expect(container.firstChild).toHaveStyleRule('border-radius', DEFAULT_THEME.borderRadii.sm);
      expect(container.firstChild).toHaveStyleRule(
        'min-width',
        `calc(${DEFAULT_THEME.space.base * 4}px + 1ch)`
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

  it('renders round styling over pill styling', () => {
    const { container } = render(<Tag isRound isPill />);

    expect(container.firstChild).toHaveStyleRule('border-radius', '50%');
  });

  it('renders regular weight styling if provided', () => {
    const { container } = render(<Tag isRegular />);

    expect(container.firstChild).toHaveStyleRule('font-weight', undefined);
  });

  describe('Hues', () => {
    const MODES = [
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const;
    const onEmphasis = (theme: typeof DEFAULT_THEME) =>
      getColor({ theme, variable: 'foreground.onEmphasis' });

    describe.each(MODES)('%s mode', (_, theme) => {
      describe.each([undefined, 'grey', 'neutralHue'])('neutral hue "%s"', hue => {
        it('renders the subtle treatment by default', () => {
          const { container } = render(<Tag hue={hue} />, { theme });
          const foregroundColor = getColor({ theme, variable: 'foreground.default' });

          expect(container.firstChild).toHaveStyleRule(
            'background-color',
            getColor({ theme, hue: 'neutralHue', light: { shade: 200 }, dark: { shade: 900 } })
          );
          expect(container.firstChild).toHaveStyleRule('color', foregroundColor);
          expect(container.firstChild).toHaveStyleRule('color', foregroundColor, {
            modifier: ':hover'
          });
        });

        it('renders the emphasis treatment', () => {
          const { container } = render(<Tag hue={hue} isEmphasis />, { theme });

          expect(container.firstChild).toHaveStyleRule(
            'background-color',
            getColor({ theme, hue: 'neutralHue', light: { shade: 700 }, dark: { shade: 400 } })
          );
          expect(container.firstChild).toHaveStyleRule('color', onEmphasis(theme));
          expect(container.firstChild).toHaveStyleRule('color', onEmphasis(theme), {
            modifier: ':hover'
          });
        });
      });

      describe.each([
        'primaryHue',
        'successHue',
        'dangerHue',
        'warningHue',
        'chromeHue',
        'blue',
        'yellow',
        'azure',
        'kale'
      ])('named hue "%s"', hue => {
        it('renders the subtle treatment by default', () => {
          const { container } = render(<Tag hue={hue} />, { theme });
          const foregroundColor = getColor({
            theme,
            hue,
            light: { shade: 900 },
            dark: { shade: 300 }
          });

          expect(container.firstChild).toHaveStyleRule(
            'background-color',
            getColor({ theme, hue, light: { shade: 200 }, dark: { shade: 900 } })
          );
          expect(container.firstChild).toHaveStyleRule('color', foregroundColor);
          expect(container.firstChild).toHaveStyleRule('color', foregroundColor, {
            modifier: ':hover'
          });
        });

        it('renders the emphasis treatment', () => {
          const { container } = render(<Tag hue={hue} isEmphasis />, { theme });

          expect(container.firstChild).toHaveStyleRule(
            'background-color',
            getColor({ theme, hue, light: { shade: 700 }, dark: { shade: 600 } })
          );
          expect(container.firstChild).toHaveStyleRule('color', onEmphasis(theme));
          expect(container.firstChild).toHaveStyleRule('color', onEmphasis(theme), {
            modifier: ':hover'
          });
        });
      });

      describe('hex hue', () => {
        it('renders the hex color for both treatments', () => {
          const { container, rerender } = render(<Tag hue="#ff6600" />, { theme });

          expect(container.firstChild).toHaveStyleRule(
            'background-color',
            getColor({ theme, hue: '#ff6600' })
          );

          rerender(<Tag hue="#ff6600" isEmphasis />);

          expect(container.firstChild).toHaveStyleRule(
            'background-color',
            getColor({ theme, hue: '#ff6600' })
          );
        });

        it('renders a dark foreground on a light hex color', () => {
          const { container } = render(<Tag hue="#ffffff" />, { theme });

          expect(container.firstChild).toHaveStyleRule('color', onEmphasis(DARK_THEME));
        });

        it('renders a light foreground on a dark hex color', () => {
          const { container } = render(<Tag hue="#000000" />, { theme });

          expect(container.firstChild).toHaveStyleRule('color', onEmphasis(DEFAULT_THEME));
        });
      });
    });
  });

  describe('Emphasis', () => {
    it('does not pass the emphasis prop to the DOM element', () => {
      const { container } = render(<Tag isEmphasis />);

      expect(container.firstChild).not.toHaveAttribute('isemphasis');
      expect(container.firstChild).not.toHaveAttribute('$isemphasis');
    });
  });

  describe('Spacing', () => {
    const space = `${DEFAULT_THEME.space.base}px`;

    it.each(['small', 'medium', 'large'] as const)(
      'renders the same avatar and close margins for %s size',
      size => {
        const { container } = render(<Tag size={size} />);

        expect(container.firstChild).toHaveStyleRule('margin-left', `-${space}`, {
          modifier: `& ${StyledAvatar}`
        });
        expect(container.firstChild).toHaveStyleRule('margin-right', space, {
          modifier: `& ${StyledAvatar}`
        });
        expect(container.firstChild).toHaveStyleRule('margin-right', `-${space}`, {
          modifier: `& ${StyledClose}`
        });
      }
    );

    it('renders the avatar and close margins with RTL locale', () => {
      const { container } = render(<Tag />, { theme: RTL_THEME });

      expect(container.firstChild).toHaveStyleRule('margin-right', `-${space}`, {
        modifier: `& ${StyledAvatar}`
      });
      expect(container.firstChild).toHaveStyleRule('margin-left', space, {
        modifier: `& ${StyledAvatar}`
      });
      expect(container.firstChild).toHaveStyleRule('margin-left', `-${space}`, {
        modifier: `& ${StyledClose}`
      });
    });
  });
});
