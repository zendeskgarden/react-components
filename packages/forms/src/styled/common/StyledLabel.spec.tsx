/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledLabel } from './StyledLabel';

describe('StyledLabel', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledLabel />);

    expect(container.firstChild!.nodeName).toBe('LABEL');
  });

  it('renders regular font weight styling if provided', () => {
    const { container } = render(<StyledLabel $isRegular />);

    expect(container.firstChild).toHaveStyleRule(
      'font-weight',
      `${DEFAULT_THEME.fontWeights.regular}`
    );
  });

  it('renders expected hidden styling', () => {
    const { container } = render(<StyledLabel hidden />);

    expect(container.firstChild).toHaveStyleRule('clip', 'rect(0 0 0 0)', { modifier: '[hidden]' });
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledLabel />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
