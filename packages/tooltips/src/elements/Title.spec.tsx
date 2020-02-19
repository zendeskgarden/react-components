/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import Title from './Title';

describe('Title', () => {
  it('applies custom attributes if provided', () => {
    const { container } = render(<Title data-test-id="title" />);

    expect(container.firstChild).toHaveAttribute('data-test-id', 'title');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Title ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
