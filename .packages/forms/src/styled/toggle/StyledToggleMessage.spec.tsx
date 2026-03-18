/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledToggleMessage } from './StyledToggleMessage';

describe('StyledToggleMessage', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledToggleMessage />);

    expect(container.firstChild).toHaveStyleRule('padding-left', '48px');
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledToggleMessage />);

    expect(container.firstChild).toHaveStyleRule('padding-right', '48px');
  });
});
