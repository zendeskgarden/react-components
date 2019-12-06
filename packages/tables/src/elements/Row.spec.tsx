/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import { Row } from './Row';

describe('Row', () => {
  it('applies default styling by default', () => {
    const { container } = render(<Row />);

    expect(container.firstChild).toHaveClass('c-table__row');
  });

  it('applies hovered styling if provided', () => {
    const { container } = render(<Row isHovered />);

    expect(container.firstChild).toHaveClass('is-hovered');
  });

  it('applies selected styling if provided', () => {
    const { container } = render(<Row isSelected />);

    expect(container.firstChild).toHaveClass('is-selected');
  });

  it('applies focused styling if provided', () => {
    const { container } = render(<Row isFocused />);

    expect(container.firstChild).toHaveClass('is-focused');
  });

  it('applies striped styling if provided', () => {
    const { container } = render(<Row isStriped />);

    expect(container.firstChild).toHaveClass('c-table__row--stripe');
  });

  describe('onFocus', () => {
    it('applies focused state', () => {
      const { container } = render(<Row />);

      fireEvent.focus(container.firstElementChild!);
      expect(container.firstChild).toHaveClass('is-focused');
    });
  });

  describe('onBlur', () => {
    it('removes focused state', () => {
      const { container } = render(<Row />);

      fireEvent.focus(container.firstElementChild!);
      fireEvent.blur(container.firstElementChild!);
      expect(container.firstChild).not.toHaveClass('is-focused');
    });
  });
});
