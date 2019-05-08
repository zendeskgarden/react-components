/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import IconButton from './IconButton';

describe('IconButton', () => {
  it('renders pill and muted styling by default', () => {
    const { container } = render(<IconButton />);

    expect(container.firstChild).toHaveClass('c-btn--icon');
  });
});
