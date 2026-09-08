/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledClearableInput } from './StyledClearableInput';
import { StyledInputGroup } from './StyledInputGroup';

describe('StyledClearableInput', () => {
  it('renders the underlying unified InputGroup border and radius by default', () => {
    const { container } = render(<StyledClearableInput isUnified />);

    expect(container.firstChild).toHaveStyleRule('border', '1px solid');
    expect(container.firstChild).toHaveStyleRule('border-radius', '4px');
  });

  describe('$isBare', () => {
    it('removes the outer border and radius', () => {
      const { container } = render(<StyledClearableInput isUnified $isBare />);

      expect(container.firstChild).toHaveStyleRule('border', 'none', {
        modifier: `&&${StyledInputGroup}`
      });
      expect(container.firstChild).toHaveStyleRule('border-radius', '0', {
        modifier: `&&${StyledInputGroup}`
      });
    });

    it('removes the background color', () => {
      const { container } = render(<StyledClearableInput isUnified $isBare />);

      expect(container.firstChild).toHaveStyleRule('background-color', 'transparent', {
        modifier: `&&${StyledInputGroup}`
      });
    });

    it('suppresses the visible focus indicator', () => {
      const { container } = render(<StyledClearableInput isUnified $isBare />);

      expect(container.firstChild).toHaveStyleRule('box-shadow', 'none', {
        modifier: `&&${StyledInputGroup}:focus-within`
      });
    });

    it('does not remove the border, radius, background, or focus indicator when absent', () => {
      const { container } = render(<StyledClearableInput isUnified />);

      expect(container.firstChild).not.toHaveStyleRule('border', 'none', {
        modifier: `&&${StyledInputGroup}`
      });
      expect(container.firstChild).not.toHaveStyleRule('background-color', 'transparent', {
        modifier: `&&${StyledInputGroup}`
      });
    });
  });
});
