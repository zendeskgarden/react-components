/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { Nav } from './Nav';

describe('Nav', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Nav ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders correct width if collapsed', () => {
    const { container } = render(<Nav />);

    expect(container.firstChild).toHaveStyleRule('width', '60px');
  });

  it('renders correct width if expanded', () => {
    const { container } = render(<Nav isExpanded />);

    expect(container.firstChild).toHaveStyleRule('width', '200px');
  });
});
