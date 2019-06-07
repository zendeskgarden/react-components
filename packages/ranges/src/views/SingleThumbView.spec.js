/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import SingleThumbView from './SingleThumbView';

describe('SingleThumbView', () => {
  it('renders default styling', () => {
    const { container } = render(<SingleThumbView />);

    expect(container.firstChild).toHaveClass('c-range__input');
  });

  it('renders RTL styling', () => {
    const { container } = renderRtl(<SingleThumbView />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders disabled styling if provided', () => {
    const { container } = render(<SingleThumbView disabled />);

    expect(container.firstChild).toHaveClass('is-disabled');
  });

  it('renders focused styling if provided', () => {
    const { container } = render(<SingleThumbView focused />);

    expect(container.firstChild).toHaveClass('is-focused');
  });

  it('renders hovered styling if provided', () => {
    const { container } = render(<SingleThumbView hovered />);

    expect(container.firstChild).toHaveClass('is-hovered');
  });

  it('renders background-size correctly', () => {
    const { container } = render(<SingleThumbView backgroundSize="95%" />);

    expect(container.firstChild).toHaveStyleRule('background-size', '95%', {
      modifier: '&&'
    });
  });
});
