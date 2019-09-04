/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import ChevronButton from './ChevronButton';

describe('ChevronButton', () => {
  it('renders a chevron SVG icon', () => {
    const { container } = render(<ChevronButton />);

    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('rotates icon if prop is provided', () => {
    const { container } = render(<ChevronButton rotated />);

    expect(container.querySelector('svg')).toHaveStyleRule('transform', 'rotate(+180deg)');
  });

  it('does not render focused styling if focused by mouse', () => {
    const { container } = render(<ChevronButton />);

    fireEvent.click(container.firstChild as any);
    expect(container.firstChild).not.toHaveClass('focus-visible');
  });

  it('renders focused styling if focused by keyboard', () => {
    const { container } = render(<ChevronButton />);

    fireEvent.focus(container.firstChild as any);
    expect(container.firstChild).toHaveClass('focus-visible');
  });
});
