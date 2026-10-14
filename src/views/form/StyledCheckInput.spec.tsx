/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { StyledCheckInput } from './StyledCheckInput';

describe('StyledCheckInput', () => {
  it('renders default styling and attributes correctly', () => {
    const { container } = render(<StyledCheckInput />);

    expect(container.firstChild!.nodeName).toBe('INPUT');
    expect(container.firstChild).toHaveAttribute('type', 'checkbox');
  });
});
