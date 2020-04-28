/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledRadioLabel } from './StyledRadioLabel';

describe('StyledRadioLabel', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledRadioLabel />);

    expect(container.firstChild!.nodeName).toBe('LABEL');
  });

  it('renders expected hidden styling', () => {
    const { container } = render(<StyledRadioLabel hidden />);

    expect(container.firstChild).toHaveStyleRule('padding-left', '16px', { modifier: '[hidden]' });
    expect(container.firstChild).toHaveStyleRule('line-height', '20px', { modifier: '[hidden]' });
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledRadioLabel />);

    expect(container.firstChild).toHaveStyleRule('padding-right', '24px');
  });
});
