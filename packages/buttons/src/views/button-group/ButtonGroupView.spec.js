/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import ButtonGroupView from './ButtonGroupView';

describe('ButtonGroupView', () => {
  it('renders correct styling', () => {
    const { container } = render(<ButtonGroupView />);

    expect(container.firstChild).toHaveClass('l-btn-group');
  });

  it('renders correctly styling when RTL', () => {
    const { container } = renderRtl(<ButtonGroupView />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });
});
