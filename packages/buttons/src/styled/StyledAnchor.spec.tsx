/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { getColorV8 } from '@zendeskgarden/react-theming';
import { COMPONENT_ID, StyledAnchor } from './StyledAnchor';

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

    expect(container.firstChild).toHaveStyleRule('color', getColorV8('dangerHue'));
  });

  it('renders expected RTL direction', () => {
    const { container } = renderRtl(<StyledAnchor />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  describe('`data-garden-id` attribute', () => {
    it('has the correct `data-garden-id`', () => {
      const { container } = render(<StyledAnchor />);

      expect(container.firstChild).toHaveAttribute('data-garden-id', COMPONENT_ID);
    });
  });
});
