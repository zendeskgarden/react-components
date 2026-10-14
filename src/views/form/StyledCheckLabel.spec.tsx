/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { StyledCheckLabel } from './StyledCheckLabel';

describe('StyledCheckLabel', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledCheckLabel />);

    expect(container.firstChild!.nodeName).toBe('LABEL');
  });
});
