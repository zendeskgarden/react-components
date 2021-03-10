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

  it('renders expected hidden styling when hidden prop is passed', () => {
    const { container } = render(<StyledLabel hidden />);

    expect(container.firstChild).toHaveStyleRule('display', 'inline', { modifier: '[hidden]' });
    expect(container.firstChild).toHaveStyleRule('border', '0');
    expect(container.firstChild).toHaveStyleRule('clip', 'rect(0 0 0 0)');
    expect(container.firstChild).toHaveStyleRule('height', '1px');
    expect(container.firstChild).toHaveStyleRule('margin', '-1px');
    expect(container.firstChild).toHaveStyleRule('overflow', 'hidden');
    expect(container.firstChild).toHaveStyleRule('padding', '0');
    expect(container.firstChild).toHaveStyleRule('position', 'absolute');
    expect(container.firstChild).toHaveStyleRule('white-space', 'nowrap');
    expect(container.firstChild).toHaveStyleRule('width', '1px');
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledLabel />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
