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

  describe('Colors', () => {
    const color = (theme: typeof DEFAULT_THEME, variable: string, options = {}) =>
      getColor({ variable, theme, ...options });

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
        color(theme, 'background.dangerEmphasis', { transparency: theme.opacity[100] }),
        { modifier: '&:hover' }
      );
      expect(container.firstChild).toHaveStyleRule(
        'border-color',
        color(theme, 'border.dangerEmphasis', offset200),
        { modifier: '&:active' }
      );
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

    it('renders subtle icon colors if neutral', () => {
      const { container } = render(
        <IconButton isNeutral>
          <TestIcon />
        </IconButton>
      );

      expect(container.firstChild).toHaveStyleRule(
        'color',
        color(DEFAULT_THEME, 'foreground.subtle', {
          light: { offset: 100 },
          dark: { offset: -100 }
        }),
        { modifier: `&:hover ${StyledIcon}` }
      );
      expect(container.firstChild).toHaveStyleRule(
        'color',
        color(DEFAULT_THEME, 'foreground.subtle'),
        { modifier: `&[aria-pressed='true'] ${StyledIcon}` }
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
