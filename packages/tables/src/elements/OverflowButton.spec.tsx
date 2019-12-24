/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import { OverflowButton } from './OverflowButton';

describe('OverflowButton', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(<OverflowButton ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('applies default styling by default', () => {
    const { container } = render(<OverflowButton />);

    expect(container.firstChild).toHaveClass('c-table__row__cell__overflow');
  });

  it('applies hovered styling if provided', () => {
    const { container } = render(<OverflowButton isHovered />);

    expect(container.firstChild).toHaveClass('is-hovered');
  });

  it('applies active styling if provided', () => {
    const { container } = render(<OverflowButton isActive />);

    expect(container.firstChild).toHaveClass('is-active');
  });

  it('applies focused styling if provided', () => {
    const { container } = render(<OverflowButton isFocused />);

    expect(container.firstChild).toHaveClass('is-focused');
  });

  describe('onFocus', () => {
    it('applies focused state', () => {
      const { container } = render(<OverflowButton />);

      fireEvent.focus(container.firstElementChild!);
      expect(container.firstElementChild).toHaveClass('is-focused');
    });
  });

  describe('onBlur', () => {
    it('removes focused state', () => {
      const { container } = render(<OverflowButton />);

      fireEvent.focus(container.firstElementChild!);
      fireEvent.blur(container.firstElementChild!);
      expect(container.firstElementChild).not.toHaveClass('is-focused');
    });
  });
});
