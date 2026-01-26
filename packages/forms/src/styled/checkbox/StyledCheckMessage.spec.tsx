/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { StyledCheckMessage } from './StyledCheckMessage';

describe('StyledCheckMessage', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledCheckMessage />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });
});
