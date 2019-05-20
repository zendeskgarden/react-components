/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import Input from './Input';

describe('Input', () => {
  it('renders default styling', () => {
    const { container } = render(<Input />);

    expect(container.firstChild).toHaveClass('c-txt__input');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<Input />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders small styling if provided', () => {
    const { container } = render(<Input small />);

    expect(container.firstChild).toHaveClass('c-txt__input--sm');
  });

  it('renders tag layout styling if provided', () => {
    const { container } = render(<Input tagLayout />);

    expect(container.firstChild).toHaveClass('c-txt__input--tag');
  });

  it('renders select styling if provided', () => {
    const { container } = render(<Input select />);

    expect(container.firstChild).toHaveClass('c-txt__input--select');
  });

  it('renders media layout styling if provided', () => {
    const { container } = render(<Input mediaLayout />);

    expect(container.firstChild).toHaveClass('c-txt__input--media');
  });

  it('renders bare styling if provided', () => {
    const { container } = render(<Input bare />);

    expect(container.firstChild).toHaveClass('c-txt__input--bare');
  });

  it('renders focus-inset styling if provided', () => {
    const { container } = render(<Input focusInset />);

    expect(container.firstChild).toHaveClass('c-txt__input--focus-inset');
  });

  it('renders disabled styling if provided', () => {
    const { container } = render(<Input disabled />);

    expect(container.firstChild).toHaveClass('is-disabled');
  });

  it('renders focused styling if provided', () => {
    const { container } = render(<Input focused />);

    expect(container.firstChild).toHaveClass('is-focused');
  });

  it('renders hovered styling if provided', () => {
    const { container } = render(<Input hovered />);

    expect(container.firstChild).toHaveClass('is-hovered');
  });

  it('renders open styling if provided', () => {
    const { container } = render(<Input open />);

    expect(container.firstChild).toHaveClass('is-open');
  });

  describe('validation', () => {
    ['success', 'warning', 'error'].forEach(validation => {
      it(`renders ${validation} styling if provided`, () => {
        const { container } = render(<Input validation={validation} />);

        expect(container.firstChild).toHaveClass(`c-txt__input--${validation}`);
      });
    });
  });
});
