/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  it('renders default styling', () => {
    const { container } = render(<Sidebar />);

    expect(container.firstChild).toHaveClass('c-chrome__body__content__sidebar');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Sidebar ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
