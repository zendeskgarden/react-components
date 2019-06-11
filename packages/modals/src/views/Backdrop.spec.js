/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import Backdrop from './Backdrop';

describe('Backdrop', () => {
  it('renders default styling', () => {
    const { container } = render(<Backdrop />);

    expect(container.firstChild).toHaveClass('l-backdrop');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<Backdrop />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders center styling if provided', () => {
    const { container } = render(<Backdrop center />);

    expect(container.firstChild).toHaveClass('l-backdrop--center');
  });

  it('renders animation styling if provided', () => {
    const { container } = render(<Backdrop animate />);

    expect(container.firstChild).toHaveClass('is-visible');
  });
});
