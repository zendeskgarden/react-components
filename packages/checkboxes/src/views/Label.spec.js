/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import Label from './Label';

describe('Label', () => {
  it('renders default styling', () => {
    const { container } = render(<Label />);

    expect(container.firstChild).toHaveClass('c-chk__label');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<Label />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders regular styling if provided', () => {
    const { container } = render(<Label regular />);

    expect(container.firstChild).toHaveClass('c-chk__label--regular');
  });

  it('renders checked styling if provided', () => {
    const { container } = render(<Label checked />);

    expect(container.firstChild).toHaveClass('is-checked');
  });

  it('renders indeterminate styling if provided', () => {
    const { container } = render(<Label indeterminate />);

    expect(container.firstChild).toHaveClass('is-indeterminate');
  });

  it('renders hovered styling if provided', () => {
    const { container } = render(<Label hovered />);

    expect(container.firstChild).toHaveClass('is-hovered');
  });

  it('renders focused styling if provided', () => {
    const { container } = render(<Label focused />);

    expect(container.firstChild).toHaveClass('is-focused');
  });

  it('renders disabled styling if provided', () => {
    const { container } = render(<Label disabled />);

    expect(container.firstChild).toHaveClass('is-disabled');
  });
});
