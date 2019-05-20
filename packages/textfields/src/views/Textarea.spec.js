/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import Textarea from './Textarea';

describe('Textarea', () => {
  it('renders default styling', () => {
    const { container } = render(<Textarea />);

    expect(container.firstChild).toHaveClass('c-txt__input--area');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<Textarea />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders resizable styling if provided', () => {
    const { container } = render(<Textarea resizable />);

    expect(container.firstChild).toHaveClass('is-resizable');
  });
});
