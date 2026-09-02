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

    it('has no block padding on the container — the Input fills the height via align-self: stretch', () => {
      const { container: regular } = render(<StyledInputGroup $isUnified />);
      const { container: compact } = render(<StyledInputGroup $isUnified $isCompact />);

      expect(regular.firstChild).not.toHaveStyleRule('padding-block', expect.any(String));
      expect(compact.firstChild).not.toHaveStyleRule('padding-block', expect.any(String));
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

    it('centers children', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('align-items', 'center');
    });

    it('does not add a gap between flex items — each item owns its own spacing via margin and padding', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).not.toHaveStyleRule('gap', expect.any(String));
    });

    it('stretches StyledTextInput to the container height, despite the container centering its other children', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('align-self', 'stretch', {
        modifier: `& ${StyledTextInput}`
      });
    });

    it('sets a 4px base container inline padding as the fallback edge spacing for non-input, non-icon-button children', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('padding-inline', DEFAULT_THEME.space.xxs);
    });

    it('removes the container start padding when an Input is the first child, so the Input owns all start spacing', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('padding-inline-start', '0', {
        modifier: `&:has(>${StyledTextInput}:first-child)`
      });
    });

    it('removes the container start padding when a nested InputGroup (e.g. ClearableInput) is the first child', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('padding-inline-start', '0', {
        modifier: `&:has(>[data-garden-id='forms.input_group']:first-child)`
      });
    });

    it('removes the container end padding when an Input is the last child, so the Input owns all end spacing', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('padding-inline-end', '0', {
        modifier: `&:has(>${StyledTextInput}:last-child)`
      });
    });

    it('removes the container end padding when a nested InputGroup is the last child', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('padding-inline-end', '0', {
        modifier: `&:has(>[data-garden-id='forms.input_group']:last-child)`
      });
    });

    it('gives every Input 8px of inline padding on both sides as a base, so it never bumps flush against an adjacent element', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('padding-inline', DEFAULT_THEME.space.xs, {
        modifier: `&>${StyledTextInput}`
      });
    });

    it('overrides the first-child Input start padding to 12px so its text starts 12px from the container edge', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('padding-inline-start', DEFAULT_THEME.space.sm, {
        modifier: `&>${StyledTextInput}:first-child`
      });
    });

    it('overrides the last-child Input end padding to 12px so its text ends 12px from the container edge', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('padding-inline-end', DEFAULT_THEME.space.sm, {
        modifier: `&>${StyledTextInput}:last-child`
      });
    });

    it('gives a non-first Input 4px of margin-inline-start so its text lands 12px from the preceding element edge (4px margin + 8px padding)', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('margin-inline-start', DEFAULT_THEME.space.xxs, {
        modifier: `&>*+${StyledTextInput}`
      });
    });

    it('adds 4px margin-inline-start to an IconButton following a nested InputGroup in compact mode, to maintain visual breathing room between adjacent compact icons', () => {
      const { container: compact } = render(<StyledInputGroup $isUnified $isCompact />);
      const { container: regular } = render(<StyledInputGroup $isUnified />);
      const modifier = `&>[data-garden-id='forms.input_group']+${ICON_BUTTON_SELECTOR}`;

      expect(compact.firstChild).toHaveStyleRule('margin-inline-start', DEFAULT_THEME.space.xs, {
        modifier
      });
      expect(regular.firstChild).not.toHaveStyleRule('margin-inline-start', expect.any(String), {
        modifier
      });
    });

    it('gives a non-first plain text Button 4px of margin-inline-start via the adjacent sibling selector, so spacing is owned entirely by the following element', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('margin-inline-start', DEFAULT_THEME.space.xxs, {
        modifier: `&>*+${BUTTON_SELECTOR}`
      });
      expect(container.firstChild).not.toHaveStyleRule('margin-inline', expect.any(String), {
        modifier: `&>${BUTTON_SELECTOR}`
      });
    });

    it('gives a non-first ToggleButton the same 4px margin-inline-start as a plain Button, since both share the buttons.button data-garden-id', () => {
      const TOGGLE_BUTTON_SELECTOR = BUTTON_SELECTOR;
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule('margin-inline-start', DEFAULT_THEME.space.xxs, {
        modifier: `&>*+${TOGGLE_BUTTON_SELECTOR}`
      });
    });

    it('gives a non-first ToggleIconButton the same margin treatment as an IconButton, since both share the buttons.icon_button data-garden-id', () => {
      const TOGGLE_ICON_BUTTON_SELECTOR = ICON_BUTTON_SELECTOR;
      const { container: compact } = render(<StyledInputGroup $isUnified $isCompact />);
      const { container: regular } = render(<StyledInputGroup $isUnified />);
      const modifier = `&>[data-garden-id='forms.input_group']+${TOGGLE_ICON_BUTTON_SELECTOR}`;

      expect(compact.firstChild).toHaveStyleRule('margin-inline-start', DEFAULT_THEME.space.xs, {
        modifier
      });
      expect(regular.firstChild).not.toHaveStyleRule('margin-inline-start', expect.any(String), {
        modifier
      });
    });

    it('gives a first-child Input the container border-radius on its leading corners to prevent autofill highlight clipping', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule(
        'border-start-start-radius',
        DEFAULT_THEME.borderRadii.md,
        { modifier: `&>${StyledTextInput}:first-child` }
      );
      expect(container.firstChild).toHaveStyleRule(
        'border-end-start-radius',
        DEFAULT_THEME.borderRadii.md,
        { modifier: `&>${StyledTextInput}:first-child` }
      );
    });

    it('gives a last-child Input the container border-radius on its trailing corners to prevent autofill highlight clipping', () => {
      const { container } = render(<StyledInputGroup $isUnified />);

      expect(container.firstChild).toHaveStyleRule(
        'border-start-end-radius',
        DEFAULT_THEME.borderRadii.md,
        { modifier: `&>${StyledTextInput}:last-child` }
      );
      expect(container.firstChild).toHaveStyleRule(
        'border-end-end-radius',
        DEFAULT_THEME.borderRadii.md,
        { modifier: `&>${StyledTextInput}:last-child` }
      );
    });

    it('gives a first-child nested InputGroup (e.g. ClearableInput) the container border-radius on the leading corners of its first-child Input', () => {
      const { container } = render(<StyledInputGroup $isUnified />);
      const modifier = `&>[data-garden-id='forms.input_group']:first-child>${StyledTextInput}:first-child`;

      expect(container.firstChild).toHaveStyleRule(
        'border-start-start-radius',
        DEFAULT_THEME.borderRadii.md,
        { modifier }
      );
      expect(container.firstChild).toHaveStyleRule(
        'border-end-start-radius',
        DEFAULT_THEME.borderRadii.md,
        { modifier }
      );
    });

    it('gives a last-child nested InputGroup (e.g. ClearableInput) the container border-radius on the trailing corners of its last-child Input', () => {
      const { container } = render(<StyledInputGroup $isUnified />);
      const modifier = `&>[data-garden-id='forms.input_group']:last-child>${StyledTextInput}:last-child`;

      expect(container.firstChild).toHaveStyleRule(
        'border-start-end-radius',
        DEFAULT_THEME.borderRadii.md,
        { modifier }
      );
      expect(container.firstChild).toHaveStyleRule(
        'border-end-end-radius',
        DEFAULT_THEME.borderRadii.md,
        { modifier }
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

      it('resets a nested InputGroup background to transparent when disabled, to prevent the disabled color from doubling up inside the outer container', () => {
        const { container } = render(<StyledInputGroup $isUnified />);
        const modifier = `&>[data-garden-id='forms.input_group']:has(${StyledTextInput}:disabled)`;

        expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
          modifier
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

      it('resets a nested InputGroup background to transparent when read-only, to prevent the read-only color from doubling up inside the outer container', () => {
        const { container } = render(<StyledInputGroup $isUnified />);
        const modifier = `&>[data-garden-id='forms.input_group']:has(${StyledTextInput}[readonly])`;

        expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
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
        expect(container.firstChild).toHaveStyleRule('border', 'none', { modifier });
        expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
          modifier
        });
        expect(container.firstChild).toHaveStyleRule('min-height', '0', { modifier });
        expect(container.firstChild).toHaveStyleRule('padding-block', '0', { modifier });
        expect(container.firstChild).toHaveStyleRule('padding-inline', '0', { modifier });
      }

      expect(regular.firstChild).not.toHaveStyleRule('gap', expect.any(String), { modifier });
      expect(compact.firstChild).not.toHaveStyleRule('gap', expect.any(String), { modifier });
    });

    it('does not apply unified gap or edge padding to the non-unified variant', () => {
      const { container } = render(<StyledInputGroup />);

      expect(container.firstChild).not.toHaveStyleRule('gap', expect.any(String));
      expect(container.firstChild).not.toHaveStyleRule('padding-inline', expect.any(String));
    });
  });
});
