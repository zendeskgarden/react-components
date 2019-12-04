/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { HeaderItemWrapper } from './HeaderItemWrapper';

describe('HeaderItemWrapper', () => {
  it('renders with correct base element', () => {
    const { container } = render(<HeaderItemWrapper />);

    expect(container.firstElementChild!.tagName).toBe('DIV');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<HeaderItemWrapper ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
