/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Icon } from './Icon';

describe('Icon', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLSpanElement>();
    const { container } = render(<Icon ref={ref} />);

    expect(container.firstChild!).toBe(ref.current);
  });

  it('renders the expected element', () => {
    const { container } = render(<Icon />);

    expect(container.firstChild!.nodeName).toBe('SPAN');
  });

  it('renders as aria-hidden', () => {
    const { container } = render(<Icon />);

    expect(container.firstChild).toHaveAttribute('aria-hidden', 'true');
  });
});
