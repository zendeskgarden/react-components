/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledFont } from './StyledFont';

describe('StyledFont', () => {
  it('renders monospace if specified', () => {
    const { container } = render(<StyledFont monospace />);

    expect(container.firstChild).toHaveStyleRule('font-family', /monospace/u);
  });

  it('renders expected RTL direction', () => {
    const { container } = renderRtl(<StyledFont />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  describe('size', () => {
    it('renders small size', () => {
      const { container } = render(<StyledFont size="sm" />);

      expect(container.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.sm);
    });

    it('renders medium size', () => {
      const { container } = render(<StyledFont size="md" />);

      expect(container.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.md);
    });

    it('renders large size', () => {
      const { container } = render(<StyledFont size="lg" />);

      expect(container.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.lg);
    });

    it('renders extra-large size', () => {
      const { container } = render(<StyledFont size="xl" />);

      expect(container.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.xl);
    });

    it('renders extra extra-large size', () => {
      const { container } = render(<StyledFont size="xxl" />);

      expect(container.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.xxl);
    });

    it('renders extra extra extra-large size', () => {
      const { container } = render(<StyledFont size="xxxl" />);

      expect(container.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.xxxl);
    });
  });
});
