/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledToggleSvg } from './StyledToggleSvg';

describe('StyledToggleSvg', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledToggleSvg />);

    expect(container.firstChild!.nodeName).toBe('svg');
  });
});
