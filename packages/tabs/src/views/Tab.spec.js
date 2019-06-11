/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';

import Tab from './Tab';

describe('Tab', () => {
  it('renders default styling', () => {
    const { container } = render(<Tab />);

    expect(container.firstChild).toHaveClass('c-tab__list__item');
  });

  it('renders hovered styling', () => {
    const { container } = render(<Tab hovered />);

    expect(container.firstChild).toHaveClass('is-hovered');
  });

  it('renders focused styling', () => {
    const { container } = render(<Tab focused />);

    expect(container.firstChild).toHaveClass('is-focused');
  });

  it('renders active styling', () => {
    const { container } = render(<Tab active />);

    expect(container.firstChild).toHaveClass('is-active');
  });

  it('renders disabled styling', () => {
    const { container } = render(<Tab disabled />);

    expect(container.firstChild).toHaveClass('is-disabled');
  });

  it('renders selected styling', () => {
    const { container } = render(<Tab selected />);

    expect(container.firstChild).toHaveClass('is-selected');
  });
});
