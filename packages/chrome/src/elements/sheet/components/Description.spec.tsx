/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { SheetDescription as Description } from './Description';

describe('Sheet.Description', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Description ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('has an id passed from context', () => {
    const { container } = render(<Description />);

    expect(container.firstChild).toHaveAttribute('id', 'sheet--description');
  });
});