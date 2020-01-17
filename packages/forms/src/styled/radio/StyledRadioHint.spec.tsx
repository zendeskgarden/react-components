/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledRadioHint } from './StyledRadioHint';

describe('StyledRadioHint', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledRadioHint />);

    expect(container.firstChild).toHaveStyleRule('padding-left', '24px');
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledRadioHint />);

    expect(container.firstChild).toHaveStyleRule('padding-right', '24px');
  });
});
