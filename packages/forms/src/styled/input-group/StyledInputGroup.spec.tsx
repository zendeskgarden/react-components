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
import { StyledButton, StyledIconButton } from '@zendeskgarden/react-buttons';
import { StyledInputGroup } from './StyledInputGroup';
import { StyledTextInput } from '../text/StyledTextInput';

describe('StyledInputGroup', () => {
  it('sets a font-size matching StyledTextInput, regardless of $isCompact or $isSeamless', () => {
    const { container: plain } = render(<StyledInputGroup />);
    const { container: compact } = render(<StyledInputGroup $isCompact />);
    const { container: seamless } = render(<StyledInputGroup $isSeamless />);
    const { container: compactSeamless } = render(<StyledInputGroup $isSeamless $isCompact />);

    expect(plain.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.md);
    expect(compact.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.md);
    expect(seamless.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.md);
    expect(compactSeamless.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.md);
  });

  describe('$isSeamless', () => {
    it('renders a container border and radius', () => {
      const { container } = render(<StyledInputGroup $isSeamless />);

      expect(container.firstChild).toHaveStyleRule('border', '1px solid');
      expect(container.firstChild).toHaveStyleRule('border-radius', '4px');
    });

    it('renders default border-color and background-color, matching the non-seamless field colors', () => {
      const { container } = render(<StyledInputGroup $isSeamless />);
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
      const { container: regular } = render(<StyledInputGroup $isSeamless />);
      const { container: compact } = render(<StyledInputGroup $isSeamless $isCompact />);

      expect(regular.firstChild).toHaveStyleRule('min-height', '40px');
      expect(compact.firstChild).toHaveStyleRule('min-height', '32px');
    });

    it('does not resize a regular IconButton, since its own small size already fits with room to spare', () => {
      const { container } = render(<StyledInputGroup $isSeamless />);
      const modifier = `& ${StyledIconButton}`;

      expect(container.firstChild).not.toHaveStyleRule('width', expect.any(String), { modifier });
      expect(container.firstChild).not.toHaveStyleRule('height', expect.any(String), {
        modifier
      });
    });

    it("shrinks a compact IconButton to 24px, since its own small size (32px) doesn't fit within a 32px container plus border", () => {
      const { container } = render(<StyledInputGroup $isSeamless $isCompact />);
      const modifier = `& ${StyledIconButton}`;

      expect(container.firstChild).toHaveStyleRule('width', '24px', { modifier });
      expect(container.firstChild).toHaveStyleRule('min-width', '24px', { modifier });
      expect(container.firstChild).toHaveStyleRule('height', '24px', { modifier });
      expect(container.firstChild).toHaveStyleRule('min-height', '24px', { modifier });
    });

    it('leaves the IconButton icon glyph at its own default size (iconSizes.md, 16px), regardless of $isCompact', () => {
      const { container: regular } = render(<StyledInputGroup $isSeamless />);
      const { container: compact } = render(<StyledInputGroup $isSeamless $isCompact />);
      const modifier = `& ${StyledIconButton} svg`;

      expect(regular.firstChild).not.toHaveStyleRule('width', expect.any(String), { modifier });
      expect(regular.firstChild).not.toHaveStyleRule('height', expect.any(String), { modifier });
      expect(compact.firstChild).not.toHaveStyleRule('width', expect.any(String), { modifier });
      expect(compact.firstChild).not.toHaveStyleRule('height', expect.any(String), { modifier });
    });

    it("sets the container's vertical padding to fit a regular IconButton's own small size, and to 3px once a compact IconButton is shrunk to fit", () => {
      const { container: regular } = render(<StyledInputGroup $isSeamless />);
      const { container: compact } = render(<StyledInputGroup $isSeamless $isCompact />);

      expect(regular.firstChild).toHaveStyleRule('padding-block', '3px');
      expect(compact.firstChild).toHaveStyleRule('padding-block', '3px');
    });

    it('does not resize the width of plain text buttons', () => {
      const { container } = render(<StyledInputGroup $isSeamless />);

      expect(container.firstChild).not.toHaveStyleRule('width', '28px', { modifier: '& button' });
    });

    it("shrinks a plain text button's height to match the icon button size, so it doesn't grow the container beyond its own min-height", () => {
      const { container: regular } = render(<StyledInputGroup $isSeamless />);
      const { container: compact } = render(<StyledInputGroup $isSeamless $isCompact />);
      const modifier = `& ${StyledButton}:not(${StyledIconButton})`;

      expect(regular.firstChild).toHaveStyleRule('height', '28px', { modifier });
      expect(regular.firstChild).toHaveStyleRule('min-height', '28px', { modifier });
      expect(regular.firstChild).toHaveStyleRule('line-height', '26px', { modifier });

      expect(compact.firstChild).toHaveStyleRule('height', '24px', { modifier });
      expect(compact.firstChild).toHaveStyleRule('min-height', '24px', { modifier });
      expect(compact.firstChild).toHaveStyleRule('line-height', '22px', { modifier });
    });

    it('centers children and adds inter-item spacing', () => {
      const { container } = render(<StyledInputGroup $isSeamless />);

      expect(container.firstChild).toHaveStyleRule('align-items', 'center');
      expect(container.firstChild).toHaveStyleRule('gap', '8px');
    });

    it('stretches StyledTextInput to the container height, despite the container centering its other children', () => {
      const { container } = render(<StyledInputGroup $isSeamless />);

      expect(container.firstChild).toHaveStyleRule('align-self', 'stretch', {
        modifier: `& ${StyledTextInput}`
      });
    });

    it("matches the container's inline edge padding to StyledTextInput's own non-bare horizontal padding", () => {
      const { container } = render(<StyledInputGroup $isSeamless />);
      const paddingHorizontal = em(`${DEFAULT_THEME.space.base * 3}px`, DEFAULT_THEME.fontSizes.md);

      expect(container.firstChild).toHaveStyleRule('padding-inline', paddingHorizontal);
    });

    it("tucks a trailing/leading icon button's own visual inset into the container's edge padding, so the button's visible edge sits a constant 4px from the container edge regardless of $isCompact", () => {
      const { container: regular } = render(<StyledInputGroup $isSeamless />);
      const { container: compact } = render(<StyledInputGroup $isSeamless $isCompact />);
      const paddingHorizontal = em(`${DEFAULT_THEME.space.base * 3}px`, DEFAULT_THEME.fontSizes.md);
      /* always derived from the regular (unshrunk) IconButton's own geometry, since a compact IconButton's icon doesn't shrink alongside it */
      const iconInset = (32 - parseFloat(DEFAULT_THEME.iconSizes.md)) / 2;
      const regularPadding = `calc(${paddingHorizontal} - ${iconInset}px)`;
      const compactPadding = `calc(${paddingHorizontal} - ${iconInset}px)`;

      expect(regular.firstChild).toHaveStyleRule('padding-inline-end', regularPadding, {
        modifier: `&:has(> ${StyledIconButton}:last-child)`
      });
      expect(regular.firstChild).toHaveStyleRule('padding-inline-start', regularPadding, {
        modifier: `&:has(> ${StyledIconButton}:first-child)`
      });
      expect(compact.firstChild).toHaveStyleRule('padding-inline-end', compactPadding, {
        modifier: `&:has(> ${StyledIconButton}:last-child)`
      });
      expect(compact.firstChild).toHaveStyleRule('padding-inline-start', compactPadding, {
        modifier: `&:has(> ${StyledIconButton}:first-child)`
      });
    });

    it("does not override the container's edge padding for a trailing/leading text button, leaving the button's own padding untouched", () => {
      const { container } = render(<StyledInputGroup $isSeamless />);

      expect(container.firstChild).not.toHaveStyleRule('padding-inline-end', expect.any(String), {
        modifier: `&:has(> ${StyledButton}:not(${StyledIconButton}):last-child)`
      });
      expect(container.firstChild).not.toHaveStyleRule('padding-inline-start', expect.any(String), {
        modifier: `&:has(> ${StyledButton}:not(${StyledIconButton}):first-child)`
      });
    });

    it("does not touch a text button's own padding-inline, only resizing it to fit the container", () => {
      const { container } = render(<StyledInputGroup $isSeamless />);

      expect(container.firstChild).not.toHaveStyleRule('padding-inline', expect.any(String), {
        modifier: `& ${StyledButton}:not(${StyledIconButton})`
      });
    });

    it('highlights the container border on focus-within, unless a button owns the focus-visible ring', () => {
      const { container } = render(<StyledInputGroup $isSeamless />);
      const focusBorderColor = getColor({
        theme: DEFAULT_THEME,
        variable: 'border.primaryEmphasis'
      });

      expect(container.firstChild).toHaveStyleRule('border-color', focusBorderColor, {
        modifier: '&:focus-within:not(:has(button:focus-visible))'
      });
    });

    it('highlights the container border on hover, matching StyledTextInput', () => {
      const { container } = render(<StyledInputGroup $isSeamless />);
      const hoverBorderColor = getColor({
        theme: DEFAULT_THEME,
        variable: 'border.primaryEmphasis'
      });

      expect(container.firstChild).toHaveStyleRule('border-color', hoverBorderColor, {
        modifier: '&:hover'
      });
    });

    it('transitions border-color smoothly, matching StyledTextInput', () => {
      const { container } = render(<StyledInputGroup $isSeamless />);

      expect(container.firstChild).toHaveStyleRule(
        'transition',
        expect.stringContaining('border-color 0.25s ease-in-out')
      );
    });

    it('transitions box-shadow smoothly, matching the focus indicator timing used by MediaInput', () => {
      const { container } = render(<StyledInputGroup $isSeamless />);

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
          const { container } = render(<StyledInputGroup $isSeamless />);
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
          const { container } = render(<StyledInputGroup $isSeamless />);
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
          const { container } = render(<StyledInputGroup $isSeamless />);
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

    it('does not impose an inset focus ring on icon buttons via CSS, leaving that to the consumer via the focusInset prop', () => {
      const { container: regular } = render(<StyledInputGroup $isSeamless />);
      const { container: compact } = render(<StyledInputGroup $isSeamless $isCompact />);
      const modifier = `& ${StyledIconButton}:focus-visible`;

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

    it('does not apply the border-overlap hacks used by the non-seamless variant', () => {
      const { container } = render(<StyledInputGroup $isSeamless />);

      expect(container.firstChild).not.toHaveStyleRule('margin-left', '-1px', {
        modifier: '&>*:not(:first-child)'
      });
    });

    it('does not apply the item z-index layering used by the non-seamless variant', () => {
      const { container } = render(<StyledInputGroup $isSeamless />);

      expect(container.firstChild).not.toHaveStyleRule('z-index', '-1', { modifier: '&>*' });
      expect(container.firstChild).not.toHaveStyleRule('z-index', '0', {
        modifier: `&>${StyledTextInput}`
      });
    });

    it('still applies item z-index layering for the non-seamless border-overlap variant', () => {
      const { container } = render(<StyledInputGroup />);

      expect(container.firstChild).toHaveStyleRule('z-index', '-1', { modifier: '&>*' });
      expect(container.firstChild).toHaveStyleRule('z-index', '0', {
        modifier: `&>${StyledTextInput}`
      });
    });

    it('does not apply seamless gap or edge padding to the non-seamless variant', () => {
      const { container } = render(<StyledInputGroup />);

      expect(container.firstChild).not.toHaveStyleRule('gap', '8px');
      expect(container.firstChild).not.toHaveStyleRule('padding-inline', expect.any(String));
    });
  });
});
