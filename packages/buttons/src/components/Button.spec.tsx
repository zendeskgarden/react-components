/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, fireEvent } from 'garden-test-utils';
import Button from './Button';

describe('Button', () => {
  it('does not render visible focus if focused by mouse', () => {
    const { container } = render(<Button />);

    fireEvent.click(container.firstChild as any);
    expect(container.firstChild).not.toHaveClass('focus-visible');
  });

  it('renders visible focus if focused by keyboard', () => {
    const { container } = render(<Button />);

    fireEvent.focus(container.firstChild as any);
    expect(container.firstChild).toHaveClass('focus-visible');
  });
});
