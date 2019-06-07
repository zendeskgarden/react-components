/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';

import Row from './Row';

describe('Row', () => {
  it('applies default styling by default', () => {
    const { container } = render(<Row />);

    expect(container.firstChild).toHaveClass('c-table__row');
  });

  it('applies hovered styling if provided', () => {
    const { container } = render(<Row hovered />);

    expect(container.firstChild).toHaveClass('is-hovered');
  });

  it('applies selected styling if provided', () => {
    const { container } = render(<Row selected />);

    expect(container.firstChild).toHaveClass('is-selected');
  });

  it('applies focused styling if provided', () => {
    const { container } = render(<Row focused />);

    expect(container.firstChild).toHaveClass('is-focused');
  });

  it('applies striped styling if provided', () => {
    const { container } = render(<Row striped />);

    expect(container.firstChild).toHaveClass('c-table__row--stripe');
  });

  describe('onFocus', () => {
    it('applies focused state', () => {
      const { container } = render(<Row />);

      fireEvent.focus(container.firstChild);
      expect(container.firstChild).toHaveClass('is-focused');
    });
  });

  describe('onBlur', () => {
    it('removes focused state', () => {
      const { container } = render(<Row />);

      fireEvent.focus(container.firstChild);
      fireEvent.blur(container.firstChild);
      expect(container.firstChild).not.toHaveClass('is-focused');
    });
  });
});
