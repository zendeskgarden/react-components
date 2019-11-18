/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Header } from './Header';

describe('Header', () => {
  it('renders default styling', () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toHaveClass('c-chrome__body__header');
  });

  it('renders standalone styling if provided', () => {
    const { container } = render(<Header isStandalone />);

    expect(container.firstChild).toHaveClass('c-chrome__body__header--standalone');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Header ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
