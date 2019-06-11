/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import ModalView from './ModalView';

describe('ModalView', () => {
  it('renders default styling', () => {
    const { container } = render(<ModalView />);

    expect(container.firstChild).toHaveClass('c-dialog');
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<ModalView />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });

  it('renders large styling if provided', () => {
    const { container } = render(<ModalView large />);

    expect(container.firstChild).toHaveClass('c-dialog--large');
  });

  it('renders animate styling if provided', () => {
    const { container } = render(<ModalView animate />);

    expect(container.firstChild).toHaveClass('is-open');
  });
});
