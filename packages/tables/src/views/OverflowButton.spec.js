/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import OverflowButton from './OverflowButton';

describe('OverflowButton', () => {
  it('applies default styling by default', () => {
    const { container } = render(<OverflowButton />);

    expect(container.firstChild).toHaveClass('c-table__row__cell__overflow');
  });

  it('applies hovered styling if provided', () => {
    const { container } = render(<OverflowButton hovered />);

    expect(container.firstChild).toHaveClass('is-hovered');
  });

  it('applies active styling if provided', () => {
    const { container } = render(<OverflowButton active />);

    expect(container.firstChild).toHaveClass('is-active');
  });

  it('applies focused styling if provided', () => {
    const { container } = render(<OverflowButton focused />);

    expect(container.firstChild).toHaveClass('is-focused');
  });

  describe('onFocus', () => {
    it('applies focused state', () => {
      const { container } = render(<OverflowButton />);

      fireEvent.focus(container.firstChild);
      expect(container.firstChild).toHaveClass('is-focused');
    });
  });

  describe('onBlur', () => {
    it('removes focused state', () => {
      const { container } = render(<OverflowButton />);

      fireEvent.focus(container.firstChild);
      fireEvent.blur(container.firstChild);
      expect(container.firstChild).not.toHaveClass('is-focused');
    });
  });
});
