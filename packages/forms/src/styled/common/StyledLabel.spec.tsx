/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledLabel } from './StyledLabel';

describe('StyledLabel', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledLabel />);

    expect(container.firstChild!.nodeName).toBe('LABEL');
  });

  it('renders regular font weight styling if provided', () => {
    const { container } = render(<StyledLabel isRegular />);

    expect(container.firstChild).toHaveStyleRule(
      'font-weight',
      `${DEFAULT_THEME.fontWeights.regular}`
    );
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledLabel />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
