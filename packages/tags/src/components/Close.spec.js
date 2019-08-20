/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Close from './Close';

describe('Close', () => {
  it('renders a close SVG icon', () => {
    const { container } = render(<Close />);

    expect(container.querySelector('svg')).not.toBeNull();
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef();
    const { container } = render(<Close ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
