/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import Anchor from './Anchor';

describe('Anchor', () => {
  it('renders default styling', () => {
    const { container } = render(<Anchor />);

    expect(container.firstChild).toHaveClass('c-btn');
    expect(container.firstChild).toHaveClass('c-btn--anchor');
  });

  it('renders danger styling if provided', () => {
    const { container } = render(<Anchor danger />);

    expect(container.firstChild).toHaveClass('c-btn--danger');
  });

  describe('Selection', () => {
    it('does not render focused styling if focused by mouse', () => {
      const { container } = render(<Anchor />);

      fireEvent.click(container.firstChild);
      expect(container.firstChild).not.toHaveClass('is-focused');
    });

    it('renders focused styling if focused by keyboard', () => {
      const { container } = render(<Anchor data-test-id="anchor" />);

      fireEvent.focus(container.firstChild);
      expect(container.firstChild).toHaveClass('is-focused');
    });
  });

  describe('States', () => {
    it('renders active styling if provided', () => {
      const { container } = render(<Anchor active />);

      expect(container.firstChild).toHaveClass('is-active');
    });

    it('renders disabled styling if provided', () => {
      const { container } = render(<Anchor disabled />);

      expect(container.firstChild).toHaveClass('is-disabled');
    });

    it('renders focused styling if provided', () => {
      const { container } = render(<Anchor focused />);

      expect(container.firstChild).toHaveClass('is-focused');
    });

    it('renders hovered styling if provided', () => {
      const { container } = render(<Anchor hovered />);

      expect(container.firstChild).toHaveClass('is-hovered');
    });
  });
});
