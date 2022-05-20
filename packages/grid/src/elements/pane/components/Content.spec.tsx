/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Content } from './Content';

describe('Content', () => {
  it('is rendered as a div', () => {
    const { container } = render(<Content />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Content ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
