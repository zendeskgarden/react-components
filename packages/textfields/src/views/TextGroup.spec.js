/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import TextGroup from './TextGroup';

describe('TextGroup', () => {
  it('renders default styling', () => {
    const { container } = render(<TextGroup />);

    expect(container.firstChild).toHaveClass('c-txt');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<TextGroup />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders inline styling if provided', () => {
    const { container } = render(<TextGroup inline />);

    expect(container.firstChild).toHaveClass('c-txt--inline');
  });
});
