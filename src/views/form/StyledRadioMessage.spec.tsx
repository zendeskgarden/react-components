/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledRadioMessage } from './StyledRadioMessage';

describe('StyledRadioMessage', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledRadioMessage />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledRadioMessage />);

    expect(container.firstChild).toHaveStyleRule('padding-right', '24px');
  });
});
