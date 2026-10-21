/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import TestIcon from 'svg-icons-legacy/src/16/gear-stroke.svg';
import { vi } from 'vitest';

import { DARK_THEME, render } from '../../test/render';
import DEFAULT_THEME from '../../theming/elements/theme';
import { getColor } from '../../theming/utils/getColor';
import { StyledIcon } from '../../views/button/StyledIcon';
import { COMPONENT_ID } from '../../views/button/StyledIconButton';
import { IconButton } from './IconButton';

describe('IconButton', () => {
  it('renders a child SVG', () => {
    const { container } = render(
      <IconButton>
        <TestIcon />
      </IconButton>
    );

    expect(container.querySelector('svg')).not.toBeNull();
  });

  describe('`data-garden-id` attribute', () => {
    it('does not let props override the garden attributes', () => {
      const { container } = render(
        <IconButton data-garden-id="myCoolIconButton" data-garden-version="0.0.0">
          <TestIcon />
        </IconButton>
      );

      expect(container.firstChild).toHaveAttribute('data-garden-id', COMPONENT_ID);
      expect(container.firstChild).toHaveAttribute('data-garden-version', PACKAGE_VERSION);
    });
  });

  describe('Sizes', () => {
    it.each(['small', 'medium', 'large'] as const)(
      'renders the icon in the same box at %s size, and every svg at that size',
      size => {
        const { container } = render(
          <IconButton size={size}>
            <TestIcon />
          </IconButton>
        );

        ['width', 'height'].forEach(property => {
          expect(container.firstChild).toHaveStyleRule(property, DEFAULT_THEME.space.md, {
            modifier: `& ${StyledIcon}`
          });
          expect(container.firstChild).toHaveStyleRule(property, DEFAULT_THEME.space.md, {
            modifier: '& svg'
          });
        });
      }
    );

    it.each([
      ['small', DEFAULT_THEME.space.base * 8],
      ['medium', DEFAULT_THEME.space.base * 10],
      ['large', DEFAULT_THEME.space.base * 12]
    ] as const)('renders a square button at %s size', (size, length) => {
      const { container } = render(
        <IconButton size={size}>
          <TestIcon />
        </IconButton>
      );

      expect(container.firstChild).toHaveStyleRule('width', `${length}px`);
      expect(container.firstChild).toHaveStyleRule('height', `${length}px`);
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
    const dangerTint = (theme: typeof DEFAULT_THEME, transparency?: number) =>
      getColor({
        theme,
        hue: 'dangerHue',
        light: { shade: 700 },
        dark: { shade: 500 },
        transparency
      });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders neutral outline styling in $0 mode', (_, theme) => {
      const { container } = render(
        <IconButton isBasic={false}>
          <TestIcon />
        </IconButton>,
        { theme }
      );

      expect(container.firstChild).toHaveStyleRule('border-color', neutral(theme, 500, 600));
      expect(container.firstChild).toHaveStyleRule('border-color', neutral(theme, 600, 500), {
        modifier: '&:hover'
      });
      expect(container.firstChild).toHaveStyleRule('border-color', neutral(theme, 700, 400), {
        modifier: '&:active'
      });
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders danger outline styling in $0 mode', (_, theme) => {
      const { container } = render(
        <IconButton isBasic={false} isDanger>
          <TestIcon />
        </IconButton>,
        { theme }
      );
      const offset100 = { light: { offset: 100 }, dark: { offset: -100 } };
      const offset200 = { light: { offset: 200 }, dark: { offset: -200 } };

      expect(container.firstChild).toHaveStyleRule('color', color(theme, 'foreground.danger'));
      expect(container.firstChild).toHaveStyleRule(
        'border-color',
        color(theme, 'border.dangerEmphasis')
      );
      expect(container.firstChild).toHaveStyleRule(
        'border-color',
        color(theme, 'border.dangerEmphasis', offset100),
        { modifier: '&:hover' }
      );
      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        dangerTint(theme, theme.opacity[100]),
        { modifier: '&:hover' }
      );
      expect(container.firstChild).toHaveStyleRule(
        'border-color',
        color(theme, 'border.dangerEmphasis', offset200),
        { modifier: '&:active' }
      );
      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        dangerTint(theme, theme.opacity[200]),
        { modifier: '&:active' }
      );
    });

    describe.each([
      ['outline neutral', { isBasic: false, isDanger: false }, 'disabled'],
      ['outline danger', { isBasic: false, isDanger: true }, 'disabled'],
      ['basic', { isBasic: true, isDanger: false }, 'transparent']
    ] as const)('disabled %s', (_label, props, background) => {
      it.each([
        ['light', DEFAULT_THEME],
        ['dark', DARK_THEME]
      ] as const)('does not react in $0 mode', (_mode, theme) => {
        const { container } = render(
          <IconButton {...props} disabled aria-pressed="true">
            <TestIcon />
          </IconButton>,
          { theme }
        );
        const foreground = color(theme, 'foreground.disabled');
        const backgroundColor =
          background === 'transparent' ? 'transparent' : color(theme, 'background.disabled');

        [
          '&:disabled',
          '&:hover:disabled',
          '&:active:disabled',
          "&[aria-pressed='true']:disabled"
        ].forEach(modifier => {
          expect(container.firstChild).toHaveStyleRule('border-color', 'transparent', {
            modifier
          });
          expect(container.firstChild).toHaveStyleRule('background-color', backgroundColor, {
            modifier
          });
          expect(container.firstChild).toHaveStyleRule('color', foreground, { modifier });
        });
      });
    });

    it('renders danger styling without a border if basic', () => {
      const { container } = render(
        <IconButton isDanger>
          <TestIcon />
        </IconButton>
      );

      expect(container.firstChild).toHaveStyleRule(
        'color',
        color(DEFAULT_THEME, 'foreground.danger')
      );
      expect(container.firstChild).toHaveStyleRule('border', 'none');
    });

    describe.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('`isNeutral` in $0 mode', (_, theme) => {
      it.each([undefined, true, false])(
        'colors the icon with the button foreground in every state if %s',
        isNeutral => {
          const { container } = render(
            <IconButton isNeutral={isNeutral}>
              <TestIcon />
            </IconButton>,
            { theme }
          );

          expect(container.firstChild).toHaveStyleRule(
            'color',
            color(theme, 'foreground.subtle', {
              light: { offset: 200 },
              dark: { offset: -200 }
            }),
            { modifier: "&[aria-pressed='true']" }
          );

          [
            `& ${StyledIcon}`,
            `&:hover ${StyledIcon}`,
            `&:focus-visible ${StyledIcon}`,
            `&:active ${StyledIcon}`,
            `&[aria-pressed='true'] ${StyledIcon}`
          ].forEach(modifier => {
            expect(container.firstChild).toHaveStyleRule('color', 'inherit', { modifier });
          });
        }
      );

      it.each([undefined, true, false])(
        'renders a resting focus border on an outline icon button if %s',
        isNeutral => {
          const { container } = render(
            <IconButton isBasic={false} isNeutral={isNeutral}>
              <TestIcon />
            </IconButton>,
            { theme }
          );

          expect(container.firstChild).toHaveStyleRule('border-color', neutral(theme, 500, 600), {
            modifier: '&:focus-visible'
          });
        }
      );
    });
  });

  describe('`type` attribute', () => {
    it('renders default type of "button"', () => {
      const { container } = render(
        <IconButton>
          <TestIcon />
        </IconButton>
      );

      expect(container.firstChild).toHaveAttribute('type', 'button');
    });

    it('renders default type of "button" if explicitly undefined', () => {
      const { container } = render(
        <IconButton type={undefined}>
          <TestIcon />
        </IconButton>
      );

      expect(container.firstChild).toHaveAttribute('type', 'button');
    });

    it('renders custom type if provided', () => {
      const { container } = render(
        <IconButton type="submit">
          <TestIcon />
        </IconButton>
      );

      expect(container.firstChild).toHaveAttribute('type', 'submit');
    });
  });

  describe('Invalid', () => {
    const consoleError = console.error;

    beforeEach(() => {
      console.error = vi.fn();
    });

    afterEach(() => {
      console.error = consoleError;
    });

    it('throws if rendered with no child', () => {
      expect(() => {
        render(<IconButton />);
      }).toThrow();
    });

    it('throws if rendered with more than one child', () => {
      expect(() => {
        render(
          <IconButton>
            <TestIcon />
            <TestIcon />
          </IconButton>
        );
      }).toThrow();
    });
  });
});
