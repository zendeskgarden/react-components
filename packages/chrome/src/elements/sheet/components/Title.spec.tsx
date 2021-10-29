/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { SheetTitle as Title } from './Title';

describe('Sheet.Title', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Title ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('has an id passed from context', () => {
    const { container } = render(<Title />);

    expect(container.firstChild).toHaveAttribute('id', 'sheet--title');
  });
});
