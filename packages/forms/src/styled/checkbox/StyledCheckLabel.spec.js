/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import StyledCheckLabel from './StyledCheckLabel';

describe('StyledCheckLabel', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledCheckLabel />);

    expect(container.firstChild).toHaveClass('c-chk__label');
  });

  it('renders regular styling correctly', () => {
    const { container } = render(<StyledCheckLabel regular />);

    expect(container.firstChild).toHaveClass('c-chk__label--regular');
  });

  it('renders default hidden correctly', () => {
    const { container } = render(<StyledCheckLabel hidden />);

    expect(container.firstChild).toHaveClass('is-hidden');
  });

  it('renders default checked correctly', () => {
    const { container } = render(<StyledCheckLabel checked />);

    expect(container.firstChild).toHaveClass('is-checked');
  });

  it('renders default indeterminate correctly', () => {
    const { container } = render(<StyledCheckLabel indeterminate />);

    expect(container.firstChild).toHaveClass('is-indeterminate');
  });

  it('renders default hovered correctly', () => {
    const { container } = render(<StyledCheckLabel hovered />);

    expect(container.firstChild).toHaveClass('is-hovered');
  });

  it('renders default focused correctly', () => {
    const { container } = render(<StyledCheckLabel focused />);

    expect(container.firstChild).toHaveClass('is-focused');
  });

  it('renders default disabled correctly', () => {
    const { container } = render(<StyledCheckLabel disabled />);

    expect(container.firstChild).toHaveClass('is-disabled');
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledCheckLabel />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });
});
