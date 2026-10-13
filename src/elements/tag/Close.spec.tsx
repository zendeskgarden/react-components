/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { Close } from './Close';

describe('Close', () => {
  it('renders a close SVG icon', () => {
    const { container } = render(<Close />);

    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('renders with default aria-label', () => {
    const { container } = render(<Close />);

    expect(container.firstChild).toHaveAttribute('aria-label', 'Remove');
  });

  it('renders with custom aria-label', () => {
    const { container } = render(<Close aria-label="Delete" />);

    expect(container.firstChild).toHaveAttribute('aria-label', 'Delete');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLButtonElement>();
    const { container } = render(<Close ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
