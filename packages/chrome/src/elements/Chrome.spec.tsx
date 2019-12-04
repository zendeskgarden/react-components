/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import { Chrome } from './Chrome';

describe('Chrome', () => {
  it('renders default styling', () => {
    const { container } = render(<Chrome />);

    expect(container.firstChild).toHaveClass('c-chrome');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<Chrome />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { container } = render(<Chrome ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });
});
