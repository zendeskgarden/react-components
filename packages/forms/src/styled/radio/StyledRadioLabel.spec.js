/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import StyledRadioLabel from './StyledRadioLabel';

describe('StyledRadioLabel', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledRadioLabel />);

    expect(container.firstChild).toHaveClass('c-chk__label--radio');
  });
});
