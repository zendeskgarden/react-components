/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import Body from './Body';

describe('Body', () => {
  it('renders default styling', () => {
    const { container } = render(<Body />);

    expect(container.firstChild).toHaveClass('c-dialog__body');
  });
});
