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

    it('sizes icon buttons to fit within the container with focus-ring clearance', () => {
      const { container: regular } = render(<StyledInputGroup $isSeamless />);
      const { container: compact } = render(<StyledInputGroup $isSeamless $isCompact />);
      const modifier = `& ${StyledIconButton}`;

      expect(regular.firstChild).toHaveStyleRule('width', '28px', { modifier });
      expect(regular.firstChild).toHaveStyleRule('min-width', '28px', { modifier });
      expect(regular.firstChild).toHaveStyleRule('height', '28px', { modifier });
      expect(regular.firstChild).toHaveStyleRule('min-height', '28px', { modifier });

      expect(compact.firstChild).toHaveStyleRule('width', '24px', { modifier });
      expect(compact.firstChild).toHaveStyleRule('min-width', '24px', { modifier });
    });

    it('does not resize plain text buttons', () => {
      const { container } = render(<StyledInputGroup $isSeamless />);

      expect(container.firstChild).not.toHaveStyleRule('width', '28px', { modifier: '& button' });
    });

    it('centers children and adds inter-item spacing', () => {
      const { container } = render(<StyledInputGroup $isSeamless />);

      expect(container.firstChild).toHaveStyleRule('align-items', 'center');
      expect(container.firstChild).toHaveStyleRule('gap', '8px');
    });

    it("matches the container's inline edge padding to StyledTextInput's own non-bare horizontal padding", () => {
      const { container } = render(<StyledInputGroup $isSeamless />);
      const paddingHorizontal = em(`${DEFAULT_THEME.space.base * 3}px`, DEFAULT_THEME.fontSizes.md);

      expect(container.firstChild).toHaveStyleRule('padding-inline', paddingHorizontal);
    });

    it("overrides a text button's own padding so it visually matches the container gap, without touching IconButton", () => {
      const { container } = render(<StyledInputGroup $isSeamless />);

      expect(container.firstChild).toHaveStyleRule('padding-inline', '8px', {
        modifier: `& ${StyledButton}:not(${StyledIconButton})`
      });
      expect(container.firstChild).not.toHaveStyleRule('padding-inline', '8px', {
        modifier: `& ${StyledIconButton}`
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

    it('draws an inset focus ring on icon buttons when compact, since there is no room for an outward ring', () => {
      const { container } = render(<StyledInputGroup $isSeamless $isCompact />);

      expect(container.firstChild).toHaveStyleRule('box-shadow', expect.stringContaining('inset'), {
        modifier: `& ${StyledIconButton}:focus-visible`
      });
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
