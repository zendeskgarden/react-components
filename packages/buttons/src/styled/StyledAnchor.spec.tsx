/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { getColor } from '@zendeskgarden/react-theming';
import { StyledAnchor } from './StyledAnchor';

describe('StyledAnchor', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledAnchor />);

    expect(container.firstChild!.nodeName).toBe('A');
  });

  it('renders default styling', () => {
    const { container } = render(<StyledAnchor />);

    expect(container.firstChild).toHaveStyleRule('display', 'inline');
  });

  it('renders danger styling if provided', () => {
    const { container } = render(<StyledAnchor isDanger />);

    expect(container.firstChild).toHaveStyleRule('color', getColor('dangerHue'));
  });

  it('renders expected RTL direction', () => {
    const { container } = renderRtl(<StyledAnchor />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
