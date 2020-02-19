/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledToggleLabel } from './StyledToggleLabel';

describe('StyledToggleLabel', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledToggleLabel />);

    expect(container.firstChild!.nodeName).toBe('LABEL');
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledToggleLabel />);

    expect(container.firstChild).toHaveStyleRule('padding-right', '48px');
  });
});
