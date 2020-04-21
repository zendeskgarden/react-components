/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledParagraph } from './StyledParagraph';

describe('StyledParagraph', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledParagraph />);

    expect(container.firstChild!.nodeName).toBe('P');
  });

  it('renders expected RTL direction', () => {
    const { container } = renderRtl(<StyledParagraph />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  describe('size', () => {
    it('renders small size', () => {
      const { container } = render(<StyledParagraph size="sm" />);

      expect(container.firstChild).toHaveStyleRule('margin-top', DEFAULT_THEME.lineHeights.sm, {
        modifier: ` + ${StyledParagraph}`
      });
    });

    it('renders medium size', () => {
      const { container } = render(<StyledParagraph size="md" />);

      expect(container.firstChild).toHaveStyleRule('margin-top', DEFAULT_THEME.lineHeights.md, {
        modifier: ` + ${StyledParagraph}`
      });
    });

    it('renders large size', () => {
      const { container } = render(<StyledParagraph size="lg" />);

      expect(container.firstChild).toHaveStyleRule('margin-top', DEFAULT_THEME.lineHeights.lg, {
        modifier: ` + ${StyledParagraph}`
      });
    });
  });
});
