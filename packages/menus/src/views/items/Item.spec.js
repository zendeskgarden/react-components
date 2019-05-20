/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Item from './Item';

describe('Item', () => {
  it('renders default styling', () => {
    const { container } = render(<Item />);

    expect(container.firstChild).toHaveClass('c-menu__item');
  });

  it('renders active styling', () => {
    const { container } = render(<Item active />);

    expect(container.firstChild).toHaveClass('is-active');
  });

  it('renders focused styling', () => {
    const { container } = render(<Item focused />);

    expect(container.firstChild).toHaveClass('is-focused');
  });

  it('renders hovered styling', () => {
    const { container } = render(<Item hovered />);

    expect(container.firstChild).toHaveClass('is-hovered');
  });

  it('renders disabled styling', () => {
    const { container } = render(<Item disabled />);

    expect(container.firstChild).toHaveClass('is-disabled');
  });

  it('renders checked styling', () => {
    const { container } = render(<Item checked />);

    expect(container.firstChild).toHaveClass('is-checked');
  });
});
