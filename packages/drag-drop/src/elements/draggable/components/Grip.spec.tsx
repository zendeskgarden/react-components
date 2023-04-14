/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Grip } from './Grip';

describe('Grip', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Grip ref={ref} />);

    expect(container.firstChild!).toBe(ref.current);
  });

  it('renders the expected element', () => {
    const { container } = render(<Grip />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders with icon', () => {
    const { container } = render(<Grip />);

    expect(container.querySelector('svg')).not.toBeNull();
  });
});
