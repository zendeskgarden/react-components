/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledFont } from './StyledFont';

describe('StyledFont', () => {
  it('renders bold if specified', () => {
    const { container } = render(<StyledFont $isBold />);

    expect(container.firstChild).toHaveStyleRule(
      'font-weight',
      DEFAULT_THEME.fontWeights.semibold.toString()
    );
  });

  it('renders monospace if specified', () => {
    const { container } = render(<StyledFont $isMonospace />);

    expect(container.firstChild).toHaveStyleRule('font-family', /monospace/u);
    expect(container.firstChild).toHaveStyleRule('line-height', 'normal');
  });

  it('renders expected hidden styling', () => {
    const { container } = render(<StyledFont hidden />);

    expect(container.firstChild).toHaveStyleRule('clip', 'rect(0 0 0 0)', { modifier: '[hidden]' });
  });

  it('renders expected RTL direction', () => {
    const { container } = renderRtl(<StyledFont />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  describe('size', () => {
    it('renders inherited size', () => {
      const { container } = render(<StyledFont />);

      expect(container.firstChild).not.toHaveStyleRule('line-height');
      expect(container.firstChild).not.toHaveStyleRule('font-family');
      expect(container.firstChild).not.toHaveStyleRule('font-size');
      expect(container.firstChild).not.toHaveStyleRule('font-weight');
    });

    it('renders small size', () => {
      const { container } = render(<StyledFont $size="small" />);

      expect(container.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.sm);
    });

    it('renders medium size', () => {
      const { container } = render(<StyledFont $size="medium" />);

      expect(container.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.md);
    });

    it('renders large size', () => {
      const { container } = render(<StyledFont $size="large" />);

      expect(container.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.lg);
    });

    it('renders extra-large size', () => {
      const { container } = render(<StyledFont $size="extralarge" />);

      expect(container.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.xl);
    });

    it('does not render monospace at extra-large size', () => {
      const { container } = render(<StyledFont $isMonospace $size="extralarge" />);

      expect(container.firstChild).not.toHaveStyleRule('font-family', /monospace/u);
    });

    it('renders extra extra-large size', () => {
      const { container } = render(<StyledFont $size="2xlarge" />);

      expect(container.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.xxl);
    });

    it('does not render monospace at extra extra-large size', () => {
      const { container } = render(<StyledFont $isMonospace $size="2xlarge" />);

      expect(container.firstChild).not.toHaveStyleRule('font-family', /monospace/u);
    });

    it('renders extra extra extra-large size', () => {
      const { container } = render(<StyledFont $size="3xlarge" />);

      expect(container.firstChild).toHaveStyleRule('font-size', DEFAULT_THEME.fontSizes.xxxl);
    });

    it('does not render monospace at extra extra extra-large size', () => {
      const { container } = render(<StyledFont $isMonospace $size="3xlarge" />);

      expect(container.firstChild).not.toHaveStyleRule('font-family', /monospace/u);
    });
  });
});
