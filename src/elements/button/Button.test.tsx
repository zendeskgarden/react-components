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
import { StyledIcon } from '../../views/button/StyledIcon';
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

    it.each([
      ['small', DEFAULT_THEME.iconSizes.md],
      ['medium', DEFAULT_THEME.space.md],
      ['large', DEFAULT_THEME.space.md]
    ] as const)('renders %s icons in a %s box, and every svg at that size', (size, iconSize) => {
      const { container } = render(
        <Button size={size}>
          <Button.StartIcon>
            <TestIcon />
          </Button.StartIcon>
        </Button>
      );

      ['width', 'height'].forEach(property => {
        expect(container.firstChild).toHaveStyleRule(property, iconSize, {
          modifier: `& ${StyledIcon}`
        });
        expect(container.firstChild).toHaveStyleRule(property, iconSize, { modifier: '& svg' });
      });
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
      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        dangerTint(theme, theme.opacity[100]),
        { modifier: '&:hover' }
      );
      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        dangerTint(theme, theme.opacity[200]),
        { modifier: '&:active' }
      );
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('keeps a disabled danger outline from reacting in $0 mode', (_, theme) => {
      const { container } = render(<Button isDanger disabled aria-pressed="true" />, { theme });
      const background = color(theme, 'background.disabled');
      const foreground = color(theme, 'foreground.disabled');

      ['&:hover:disabled', '&:active:disabled', "&[aria-pressed='true']:disabled"].forEach(
        modifier => {
          expect(container.firstChild).toHaveStyleRule('border-color', 'transparent', {
            modifier
          });
          expect(container.firstChild).toHaveStyleRule('background-color', background, {
            modifier
          });
          expect(container.firstChild).toHaveStyleRule('color', foreground, { modifier });
        }
      );
    });

    it.each([
      ['light', DEFAULT_THEME],
      ['dark', DARK_THEME]
    ] as const)('renders danger neutral styling in $0 mode', (_, theme) => {
      const { container } = render(<Button isDanger isNeutral />, { theme });

      expect(container.firstChild).toHaveStyleRule('color', color(theme, 'foreground.danger'));
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

    describe('`isNeutral`', () => {
      const offset100 = { light: { offset: 100 }, dark: { offset: -100 } };
      const offset200 = { light: { offset: 200 }, dark: { offset: -200 } };

      describe.each([
        ['light', DEFAULT_THEME],
        ['dark', DARK_THEME]
      ] as const)('in $0 mode', (_, theme) => {
        describe.each([
          ['unset', undefined],
          ['true', true]
        ])('when %s', (__, isNeutral) => {
          it('renders neutral text and a resting focus border', () => {
            const { container } = render(<Button isNeutral={isNeutral} />, { theme });

            expect(container.firstChild).toHaveStyleRule(
              'color',
              color(theme, 'foreground.default')
            );
            expect(container.firstChild).toHaveStyleRule('border-color', neutral(theme, 500, 600), {
              modifier: '&:focus-visible'
            });
          });

          it('renders subtle icon colors, including when pressed', () => {
            const { container } = render(<Button isNeutral={isNeutral} />, { theme });
            const options = { variable: 'foreground.subtle' };

            expect(container.firstChild).toHaveStyleRule('color', color(theme, options.variable), {
              modifier: `& ${StyledIcon}`
            });
            expect(container.firstChild).toHaveStyleRule(
              'color',
              color(theme, options.variable, offset100),
              { modifier: `&:hover ${StyledIcon}` }
            );
            expect(container.firstChild).toHaveStyleRule(
              'color',
              color(theme, options.variable, offset200),
              { modifier: `&:active ${StyledIcon}` }
            );
            expect(container.firstChild).toHaveStyleRule(
              'color',
              color(theme, options.variable, offset200),
              { modifier: `&[aria-pressed='true'] ${StyledIcon}` }
            );
          });
        });

        it('renders primary-colored text and no subtle icons if false', () => {
          const { container } = render(<Button isNeutral={false} />, { theme });

          expect(container.firstChild).toHaveStyleRule('color', color(theme, 'foreground.primary'));
          expect(container.firstChild).toHaveStyleRule(
            'color',
            color(theme, 'foreground.primary', offset100),
            { modifier: '&:hover' }
          );
          expect(container.firstChild).not.toHaveStyleRule('color', undefined, {
            modifier: `& ${StyledIcon}`
          });
          expect(container.firstChild).toHaveStyleRule('border-color', neutral(theme, 500, 600), {
            modifier: '&:focus-visible'
          });
        });

        it.each([undefined, true, false])(
          'renders danger icons in the danger color if %s',
          isNeutral => {
            const { container } = render(<Button isDanger isNeutral={isNeutral} />, { theme });

            expect(container.firstChild).not.toHaveStyleRule('color', undefined, {
              modifier: `& ${StyledIcon}`
            });
            expect(container.firstChild).not.toHaveStyleRule('color', undefined, {
              modifier: `&[aria-pressed='true'] ${StyledIcon}`
            });
            expect(container.firstChild).not.toHaveStyleRule('border-color', undefined, {
              modifier: '&:focus-visible'
            });
          }
        );

        it.each([undefined, true, false])(
          'renders a focus border on every primary inset button if %s',
          isNeutral => {
            const { container } = render(<Button isPrimary focusInset isNeutral={isNeutral} />, {
              theme
            });

            expect(container.firstChild).toHaveStyleRule(
              'border-color',
              color(theme, 'border.primaryEmphasis'),
              { modifier: '&:focus-visible' }
            );
          }
        );

        it.each([undefined, true, false])(
          'renders no focus border on a primary button that is not inset if %s',
          isNeutral => {
            const { container } = render(<Button isPrimary isNeutral={isNeutral} />, { theme });

            expect(container.firstChild).not.toHaveStyleRule('border-color', undefined, {
              modifier: '&:focus-visible'
            });
          }
        );
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
