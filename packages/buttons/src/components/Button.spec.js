/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import Button, { StyledButton } from './Button';

describe('Button', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledButton />);

    expect(container.firstChild).toHaveClass('c-btn');
  });

  it('renders danger styling if provided', () => {
    const { container } = render(<StyledButton danger />);

    expect(container.firstChild).toHaveClass('c-btn--danger');
  });

  it('renders correct combination of danger and disabled styling if provided', () => {
    const { container } = render(<StyledButton danger disabled />);

    expect(container.firstChild).toHaveClass('is-disabled');
    expect(container.firstChild).not.toHaveClass('c-btn--danger');
  });

  it('renders stretched styling if provided', () => {
    const { container } = render(<StyledButton stretched />);

    expect(container.firstChild).toHaveClass('c-btn--full');
  });

  it('renders focus-inset styling if provided', () => {
    const { container } = render(<StyledButton focusInset />);

    expect(container.firstChild).toHaveClass('c-btn--focus-inset');
  });

  describe('Types', () => {
    it('renders primary styling if provided', () => {
      const { container } = render(<StyledButton primary />);

      expect(container.firstChild).toHaveClass('c-btn--primary');
    });

    it('renders basic styling if provided', () => {
      const { container } = render(<StyledButton basic />);

      expect(container.firstChild).toHaveClass('c-btn--basic');
    });

    it('renders muted styling if provided', () => {
      const { container } = render(<StyledButton muted />);

      expect(container.firstChild).toHaveClass('c-btn--muted');
    });

    it('renders link styling if provided', () => {
      const { container } = render(<StyledButton link />);

      expect(container.firstChild).toHaveClass('c-btn--anchor');
    });

    it('renders pill styling if provided', () => {
      const { container } = render(<StyledButton pill />);

      expect(container.firstChild).toHaveClass('c-btn--pill');
    });
  });

  describe('Selection', () => {
    it('does not render focused styling if focused by mouse', () => {
      const { container } = render(<Button data-test-id="button" />);

      fireEvent.click(container.firstChild);
      expect(container.firstChild).not.toHaveClass('is-focused');
    });

    it('renders focused styling if focused by keyboard', () => {
      const { container } = render(<Button data-test-id="button" />);

      fireEvent.focus(container.firstChild);
      expect(container.firstChild).toHaveClass('is-focused');
    });
  });

  describe('Sizes', () => {
    it('renders small styling if provided', () => {
      const { container } = render(<StyledButton size="small" />);

      expect(container.firstChild).toHaveClass('c-btn--sm');
    });

    it('renders large styling if provided', () => {
      const { container } = render(<StyledButton size="large" />);

      expect(container.firstChild).toHaveClass('c-btn--lg');
    });
  });

  describe('States', () => {
    it('renders active styling if provided', () => {
      const { container } = render(<StyledButton active />);

      expect(container.firstChild).toHaveClass('is-active');
    });

    it('renders disabled styling if provided', () => {
      const { container } = render(<StyledButton disabled />);

      expect(container.firstChild).toHaveClass('is-disabled');
    });

    it('renders focused styling if provided', () => {
      const { container } = render(<StyledButton focused />);

      expect(container.firstChild).toHaveClass('is-focused');
    });

    it('renders hovered styling if provided', () => {
      const { container } = render(<StyledButton hovered />);

      expect(container.firstChild).toHaveClass('is-hovered');
    });

    it('renders selected styling if provided', () => {
      const { container } = render(<StyledButton selected />);

      expect(container.firstChild).toHaveClass('is-selected');
    });
  });
});
