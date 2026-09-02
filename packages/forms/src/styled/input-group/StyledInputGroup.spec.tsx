/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { em } from 'polished';
import { DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { StyledInputGroup } from './StyledInputGroup';
import { StyledTextInput } from '../text/StyledTextInput';

const BUTTON_SELECTOR = "button[data-garden-id='buttons.button']";
const ICON_BUTTON_SELECTOR = "button[data-garden-id='buttons.icon_button']";

describe('StyledInputGroup', () => {
  it('sets a font-size matching StyledTextInput, regardless of $isCompact or $isUnified', () => {
    const { container: plain } = render(<StyledInputGroup />);
    const { container: compact } = render(<StyledInputGroup $isCompact />);
    const { container: unified } = render(<StyledInputGroup $isUnified />);
    const { container: compactUnified } = render(<StyledInputGroup $isUnified $isCompact />);

    expect(plain.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.md);
    expect(compact.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.md);
    expect(unified.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.md);
    expect(compactUnified.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.md);
  });

  describe('$isUnified', () => {
    it('renders a container border and radius', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('border', '1px solid');
      expect(container.firstChild).toHaveStyleRule('border-radius', '4px');
    });

    it('renders default border-color and background-color, matching the non-unified field colors', () => {
      const { container } = render(<StyledInputGroup $isUnified />);
      const borderColor = getColor({
        theme: DEFAULT_THEME,
        variable: 'border.default',
        dark: { offset: -100 },
        light: { offset: 100 }
      });
      const backgroundColor = getColor({ theme: DEFAULT_THEME, variable: 'background.default' });

      expect(container.firstChild).toHaveStyleRule('border-color', borderColor);
      expect(container.firstChild).toHaveStyleRule('background-color', backgroundColor);
    });

    it('renders a 40px minimum height by default, and 32px when compact', () => {
      const { container: regular } = render(<StyledInputGroup $isUnified />);
      const { container: compact } = render(<StyledInputGroup $isUnified $isCompact />);

      expect(regular.firstChild).toHaveStyleRule('min-height', '40px');
      expect(compact.firstChild).toHaveStyleRule('min-height', '32px');
    });

    it('sizes icon buttons to fit the container via CSS: 32px, or 24px when compact', () => {
      const { container: regular } = render(<StyledInputGroup $isUnified />);
      const { container: compact } = render(<StyledInputGroup $isUnified $isCompact />);
      const modifier = `& ${ICON_BUTTON_SELECTOR}`;

      expect(regular.firstChild).toHaveStyleRule('width', '32px', { modifier });
      expect(regular.firstChild).toHaveStyleRule('min-width', '32px', { modifier });
      expect(regular.firstChild).toHaveStyleRule('height', '32px', { modifier });
      expect(regular.firstChild).toHaveStyleRule('min-height', '32px', { modifier });
      expect(compact.firstChild).toHaveStyleRule('width', '24px', { modifier });
      expect(compact.firstChild).toHaveStyleRule('min-width', '24px', { modifier });
      expect(compact.firstChild).toHaveStyleRule('height', '24px', { modifier });
      expect(compact.firstChild).toHaveStyleRule('min-height', '24px', { modifier });
    });

    it('applies no [aria-pressed] exception, so a ToggleIconButton is sized like any icon button', () => {
      const { container: regular } = render(<StyledInputGroup $isUnified />);
      const { container: compact } = render(<StyledInputGroup $isUnified $isCompact />);
      const modifier = `& ${ICON_BUTTON_SELECTOR}:not([aria-pressed])`;

      expect(regular.firstChild).not.toHaveStyleRule('width', expect.any(String), { modifier });
      expect(regular.firstChild).not.toHaveStyleRule('height', expect.any(String), { modifier });
      expect(compact.firstChild).not.toHaveStyleRule('width', expect.any(String), { modifier });
      expect(compact.firstChild).not.toHaveStyleRule('height', expect.any(String), { modifier });
    });

    it('leaves the IconButton icon glyph at its own default size (iconSizes.md, 16px), regardless of $isCompact', () => {
      const { container: regular } = render(<StyledInputGroup $isUnified />);
      const { container: compact } = render(<StyledInputGroup $isUnified $isCompact />);
      const modifier = `& ${ICON_BUTTON_SELECTOR} svg`;

      expect(regular.firstChild).not.toHaveStyleRule('width', expect.any(String), { modifier });
      expect(regular.firstChild).not.toHaveStyleRule('height', expect.any(String), { modifier });
      expect(compact.firstChild).not.toHaveStyleRule('width', expect.any(String), { modifier });
      expect(compact.firstChild).not.toHaveStyleRule('height', expect.any(String), { modifier });
    });

    it("sets the container's vertical padding to fit the CSS-sized IconButton, regular or compact", () => {
      const { container: regular } = render(<StyledInputGroup $isUnified />);
      const { container: compact } = render(<StyledInputGroup $isUnified $isCompact />);

      expect(regular.firstChild).toHaveStyleRule('padding-block', '3px');
      expect(compact.firstChild).toHaveStyleRule('padding-block', '3px');
    });

    it('does not resize the width of plain text buttons', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).not.toHaveStyleRule('width', '28px', { modifier: '& button' });
    });

    it("shrinks a plain text button's height to match the icon button size, so it doesn't grow the container beyond its own min-height", () => {
      const { container: regular } = render(<StyledInputGroup $isUnified />);
      const { container: compact } = render(<StyledInputGroup $isUnified $isCompact />);
      const modifier = `& ${BUTTON_SELECTOR}`;

      expect(regular.firstChild).toHaveStyleRule('height', '28px', { modifier });
      expect(regular.firstChild).toHaveStyleRule('min-height', '28px', { modifier });
      expect(regular.firstChild).toHaveStyleRule('line-height', '26px', { modifier });

      expect(compact.firstChild).toHaveStyleRule('height', '24px', { modifier });
      expect(compact.firstChild).toHaveStyleRule('min-height', '24px', { modifier });
      expect(compact.firstChild).toHaveStyleRule('line-height', '22px', { modifier });
    });

    it('centers children and adds inter-item spacing', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('align-items', 'center');
      expect(container.firstChild).toHaveStyleRule('gap', '8px');
    });

    it('stretches StyledTextInput to the container height, despite the container centering its other children', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('align-self', 'stretch', {
        modifier: `& ${StyledTextInput}`
      });
    });

    it("matches the container's inline edge padding to the inter-item gap", () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('padding-inline', '8px');
    });

    it('gives a child Input a theme.space.xxs padding-inline-start, regardless of its position among siblings, so its text totals 12px from whatever precedes it', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule(
        'padding-inline-start',
        DEFAULT_THEME.space.xxs,
        {
          modifier: `&>${StyledTextInput}`
        }
      );
    });

    it("tucks a trailing/leading icon button's own visual inset into the container's edge padding, so the icon glyph lands at the same distance from the container edge in both regular and compact", () => {
      const { container: regular } = render(<StyledInputGroup $isUnified />);
      const { container: compact } = render(<StyledInputGroup $isUnified $isCompact />);
      const paddingHorizontal = em(`${DEFAULT_THEME.space.base * 3}px`, DEFAULT_THEME.fontSizes.md);
      const regularIconButtonSize = 32;
      const compactIconButtonSize = DEFAULT_THEME.space.base * 6;
      const iconGlyphSize = parseFloat(DEFAULT_THEME.iconSizes.md);
      const regularIconInset = (regularIconButtonSize - iconGlyphSize) / 2;
      const compactIconInset = (compactIconButtonSize - iconGlyphSize) / 2;
      const regularPadding = `calc(${paddingHorizontal} - ${regularIconInset}px)`;
      const compactPadding = `calc(${paddingHorizontal} - ${compactIconInset}px)`;

      expect(regular.firstChild).toHaveStyleRule('padding-inline-end', regularPadding, {
        modifier: `&:has(> ${ICON_BUTTON_SELECTOR}:last-child)`
      });
      expect(regular.firstChild).toHaveStyleRule('padding-inline-start', regularPadding, {
        modifier: `&:has(> ${ICON_BUTTON_SELECTOR}:first-child)`
      });
      expect(compact.firstChild).toHaveStyleRule('padding-inline-end', compactPadding, {
        modifier: `&:has(> ${ICON_BUTTON_SELECTOR}:last-child)`
      });
      expect(compact.firstChild).toHaveStyleRule('padding-inline-start', compactPadding, {
        modifier: `&:has(> ${ICON_BUTTON_SELECTOR}:first-child)`
      });
    });

    it("does not override the container's edge padding for a trailing/leading text button, leaving the button's own padding untouched", () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).not.toHaveStyleRule('padding-inline-end', expect.any(String), {
        modifier: `&:has(> ${BUTTON_SELECTOR}:last-child)`
      });
      expect(container.firstChild).not.toHaveStyleRule('padding-inline-start', expect.any(String), {
        modifier: `&:has(> ${BUTTON_SELECTOR}:first-child)`
      });
    });

    it("does not touch a text button's own padding-inline, only resizing it to fit the container", () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).not.toHaveStyleRule('padding-inline', expect.any(String), {
        modifier: `& ${BUTTON_SELECTOR}`
      });
    });

    it('highlights the container border on focus-within, unless a button owns the focus-visible ring', () => {
      const { container } = render(<StyledInputGroup $isUnified />);
      const focusBorderColor = getColor({
        theme: DEFAULT_THEME,
        variable: 'border.primaryEmphasis'
      });

      expect(container.firstChild).toHaveStyleRule('border-color', focusBorderColor, {
        modifier: '&:focus-within:not(:has(button:focus-visible))'
      });
    });

    it('highlights the container border on hover, matching StyledTextInput', () => {
      const { container } = render(<StyledInputGroup $isUnified />);
      const hoverBorderColor = getColor({
        theme: DEFAULT_THEME,
        variable: 'border.primaryEmphasis'
      });

      expect(container.firstChild).toHaveStyleRule('border-color', hoverBorderColor, {
        modifier: '&:hover'
      });
    });

    it('transitions border-color smoothly, matching StyledTextInput', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule(
        'transition',
        expect.stringContaining('border-color 0.25s ease-in-out')
      );
    });

    it('transitions box-shadow smoothly, matching the focus indicator timing used by MediaInput', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule(
        'transition',
        expect.stringContaining('box-shadow 0.1s ease-in-out')
      );
    });

    describe('validation', () => {
      const VALIDATION_BORDER_VARIABLE = {
        success: 'border.successEmphasis',
        warning: 'border.warningEmphasis',
        error: 'border.dangerEmphasis'
      } as const;

      it.each(['success', 'warning', 'error'] as const)(
        'highlights the container border in the %s color at rest, based on a descendant data-validation attribute',
        validation => {
          const { container } = render(<StyledInputGroup $isUnified />);
          const borderColor = getColor({
            theme: DEFAULT_THEME,
            variable: VALIDATION_BORDER_VARIABLE[validation]
          });

          expect(container.firstChild).toHaveStyleRule('border-color', borderColor, {
            modifier: `&:has(${StyledTextInput}[data-validation="${validation}"])`
          });
        }
      );

      it.each(['success', 'warning', 'error'] as const)(
        'highlights the container border in the %s color on hover, based on a descendant data-validation attribute',
        validation => {
          const { container } = render(<StyledInputGroup $isUnified />);
          const borderColor = getColor({
            theme: DEFAULT_THEME,
            variable: VALIDATION_BORDER_VARIABLE[validation]
          });

          expect(container.firstChild).toHaveStyleRule('border-color', borderColor, {
            modifier: `&:hover:has(${StyledTextInput}[data-validation="${validation}"])`
          });
        }
      );

      it.each(['success', 'warning', 'error'] as const)(
        'highlights the container border in the %s color on focus-within, based on a descendant data-validation attribute',
        validation => {
          const { container } = render(<StyledInputGroup $isUnified />);
          const borderColor = getColor({
            theme: DEFAULT_THEME,
            variable: VALIDATION_BORDER_VARIABLE[validation]
          });

          expect(container.firstChild).toHaveStyleRule('border-color', borderColor, {
            modifier: `&:focus-within:has(${StyledTextInput}[data-validation="${validation}"]):not(:has(button:focus-visible))`
          });
        }
      );
    });

    describe('disabled', () => {
      it("highlights the container border and background in disabled colors, based on a descendant's :disabled state", () => {
        const { container } = render(<StyledInputGroup $isUnified />);
        const borderColor = getColor({ theme: DEFAULT_THEME, variable: 'border.disabled' });
        const backgroundColor = getColor({ theme: DEFAULT_THEME, variable: 'background.disabled' });

        expect(container.firstChild).toHaveStyleRule('border-color', borderColor, {
          modifier: `&:has(${StyledTextInput}:disabled)`
        });
        expect(container.firstChild).toHaveStyleRule('background-color', backgroundColor, {
          modifier: `&:has(${StyledTextInput}:disabled)`
        });
      });

      it('shows a text cursor by default', () => {
        const { container } = render(<StyledInputGroup $isUnified />);

        expect(container.firstChild).toHaveStyleRule('cursor', 'text');
      });

      it("shows a default cursor based on a descendant's :disabled state", () => {
        const { container } = render(<StyledInputGroup $isUnified />);

        expect(container.firstChild).toHaveStyleRule('cursor', 'default', {
          modifier: `&:has(${StyledTextInput}:disabled)`
        });
      });
    });

    describe('readOnly', () => {
      it("highlights the container background in the disabled background color, based on a descendant's readonly attribute", () => {
        const { container } = render(<StyledInputGroup $isUnified />);
        const backgroundColor = getColor({ theme: DEFAULT_THEME, variable: 'background.disabled' });

        expect(container.firstChild).toHaveStyleRule('background-color', backgroundColor, {
          modifier: `&:has(${StyledTextInput}[readonly])`
        });
      });

      it("does not change the container's border-color or cursor, since a read-only input remains focusable and selectable", () => {
        const { container } = render(<StyledInputGroup $isUnified />);
        const modifier = `&:has(${StyledTextInput}[readonly])`;

        expect(container.firstChild).not.toHaveStyleRule('border-color', expect.any(String), {
          modifier
        });
        expect(container.firstChild).not.toHaveStyleRule('cursor', expect.any(String), {
          modifier
        });
      });
    });

    it('does not impose an inset focus ring on icon buttons via CSS, leaving that to the consumer via the focusInset prop', () => {
      const { container: regular } = render(<StyledInputGroup $isUnified />);
      const { container: compact } = render(<StyledInputGroup $isUnified $isCompact />);
      const modifier = `& ${ICON_BUTTON_SELECTOR}:focus-visible`;

      expect(regular.firstChild).not.toHaveStyleRule(
        'box-shadow',
        expect.stringContaining('inset'),
        { modifier }
      );
      expect(compact.firstChild).not.toHaveStyleRule(
        'box-shadow',
        expect.stringContaining('inset'),
        { modifier }
      );
    });

    it('does not apply the border-overlap hacks used by the non-unified variant', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).not.toHaveStyleRule('margin-left', '-1px', {
        modifier: '&>*:not(:first-child)'
      });
    });

    it('does not apply the item z-index layering used by the non-unified variant', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).not.toHaveStyleRule('z-index', '-1', { modifier: '&>*' });
      expect(container.firstChild).not.toHaveStyleRule('z-index', '0', {
        modifier: `&>${StyledTextInput}`
      });
    });

    it('still applies item z-index layering for the non-unified border-overlap variant', () => {
      const { container } = render(<StyledInputGroup />);

      expect(container.firstChild).toHaveStyleRule('z-index', '-1', { modifier: '&>*' });
      expect(container.firstChild).toHaveStyleRule('z-index', '0', {
        modifier: `&>${StyledTextInput}`
      });
    });

    it('strips the visual container from a direct nested InputGroup child and makes it a transparent flex wrapper that fills the remaining space', () => {
      const { container: regular } = render(<StyledInputGroup $isUnified />);
      const { container: compact } = render(<StyledInputGroup $isUnified $isCompact />);
      const modifier = `&>[data-garden-id='forms.input_group']`;

      for (const container of [regular, compact]) {
        expect(container.firstChild).toHaveStyleRule('flex', '1 1 auto', { modifier });
        expect(container.firstChild).toHaveStyleRule('align-self', 'stretch', { modifier });
        expect(container.firstChild).toHaveStyleRule('min-width', '0', { modifier });
        expect(container.firstChild).toHaveStyleRule('gap', DEFAULT_THEME.space.xs, { modifier });
        expect(container.firstChild).toHaveStyleRule('border', 'none', { modifier });
        expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
          modifier
        });
        expect(container.firstChild).toHaveStyleRule('min-height', '0', { modifier });
        expect(container.firstChild).toHaveStyleRule('padding-block', '0', { modifier });
        expect(container.firstChild).toHaveStyleRule('padding-inline', '0', { modifier });
      }
    });

    it('does not apply unified gap or edge padding to the non-unified variant', () => {
      const { container } = render(<StyledInputGroup />);

      expect(container.firstChild).not.toHaveStyleRule('gap', '8px');
      expect(container.firstChild).not.toHaveStyleRule('padding-inline', expect.any(String));
    });
  });
});
