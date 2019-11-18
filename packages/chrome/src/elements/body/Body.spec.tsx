/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Body } from './Body';

describe('Body', () => {
  it('renders default styling', () => {
    const { container } = render(<Body />);

    expect(container.firstChild).toHaveClass('c-chrome__body');
  });

  it('renders footer styling', () => {
    const { container } = render(<Body hasFooter />);

    expect(container.firstChild).toHaveClass('c-chrome__body--footer');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Body ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
