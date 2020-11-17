/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledBlockquote } from './StyledBlockquote';

describe('StyledBlockquote', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledBlockquote />);

    expect(container.firstChild!.nodeName).toBe('BLOCKQUOTE');
  });

  it('renders expected RTL direction', () => {
    const { container } = renderRtl(<StyledBlockquote />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  describe('size', () => {
    it('renders small size', () => {
      const { container } = render(<StyledBlockquote size="sm" />);

      expect(container.firstChild).toHaveStyleRule('margin-top', DEFAULT_THEME.lineHeights.sm, {
        modifier: ` + ${StyledBlockquote}`
      });
    });

    it('renders medium size', () => {
      const { container } = render(<StyledBlockquote size="md" />);

      expect(container.firstChild).toHaveStyleRule('margin-top', DEFAULT_THEME.lineHeights.md, {
        modifier: ` + ${StyledBlockquote}`
      });
    });

    it('renders large size', () => {
      const { container } = render(<StyledBlockquote size="lg" />);

      expect(container.firstChild).toHaveStyleRule('margin-top', DEFAULT_THEME.lineHeights.lg, {
        modifier: ` + ${StyledBlockquote}`
      });
    });
  });
});
