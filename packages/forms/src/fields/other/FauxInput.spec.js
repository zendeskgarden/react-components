/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import FauxInput from './FauxInput';

describe('FauxInput', () => {
  it('applies hovered styling on mouseenter event', () => {
    const { container } = render(<FauxInput />);

    expect(container.firstChild).not.toHaveClass('is-hovered');

    fireEvent.mouseEnter(container.firstChild);

    expect(container.firstChild).toHaveClass('is-hovered');
  });

  it('removes hovered styling on mouseleave event', () => {
    const { container } = render(<FauxInput />);

    fireEvent.mouseEnter(container.firstChild);

    expect(container.firstChild).toHaveClass('is-hovered');

    fireEvent.mouseLeave(container.firstChild);

    expect(container.firstChild).not.toHaveClass('is-hovered');
  });

  it('applies focused styling on focus event', () => {
    const { container } = render(<FauxInput />);

    expect(container.firstChild).not.toHaveClass('is-focused');

    fireEvent.focus(container.firstChild);

    expect(container.firstChild).toHaveClass('is-focused');
  });

  it('removes focused styling on blur event', () => {
    const { container } = render(<FauxInput />);

    fireEvent.focus(container.firstChild);

    expect(container.firstChild).toHaveClass('is-focused');

    fireEvent.blur(container.firstChild);

    expect(container.firstChild).not.toHaveClass('is-focused');
  });
});
