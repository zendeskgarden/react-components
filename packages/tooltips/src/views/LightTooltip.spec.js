/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import LightTooltip from './LightTooltip';

describe('LightTooltip', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<LightTooltip />);

    expect(container.firstChild).toHaveClass('c-tooltip--light');
  });
});
