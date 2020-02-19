/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledText } from './StyledText';

describe('StyledText', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledText />);

    expect(container.firstChild!.nodeName).toBe('SPAN');
  });

  it('renders with expected styling', () => {
    const { container } = render(<StyledText />);

    expect(container.firstChild).toHaveStyleRule('text-align', 'center');
  });
});
