/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { SkipNav } from './SkipNav';

describe('SkipNav', () => {
  it('renders the expected element', () => {
    const { container } = render(<SkipNav targetId="test" />);

    expect(container.firstChild!.nodeName).toBe('A');
    expect(container.firstChild).toHaveAttribute('href', '#test');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLAnchorElement>();
    const { container } = render(<SkipNav ref={ref} targetId="test" />);

    expect(container.firstChild).toBe(ref.current);
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<SkipNav targetId="test" />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('styles z-index if specified', () => {
    const { container } = render(<SkipNav zIndex={100} targetId="test" />);

    expect(container.firstChild).toHaveStyleRule('z-index', '100');
  });
});
