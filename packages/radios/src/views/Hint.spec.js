/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import Hint from './Hint';

describe('Hint', () => {
  it('renders default styling', () => {
    const { container } = render(<Hint />);

    expect(container.firstChild).toHaveClass('c-chk__hint');
    expect(container.firstChild).toHaveClass('c-chk__hint--radio');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<Hint />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });
});
