/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { rgba } from 'polished';
import { render, renderDark, renderRtl } from 'garden-test-utils';
import { DEFAULT_THEME, PALETTE } from '@zendeskgarden/react-theming';
import { StyledCodeBlockLine } from './StyledCodeBlockLine';

describe('StyledCodeBlockLine', () => {
  it('renders the expected element', () => {
    const { container } = renderDark(<StyledCodeBlockLine />);

    expect(container.firstChild!.nodeName).toBe('CODE');
  });

  it('renders expected RTL direction', () => {
    const { container } = renderRtl(<StyledCodeBlockLine />);

    expect(container.firstChild).toHaveStyleRule('direction', 'ltr');
  });

  describe('highlights', () => {
    it('renders highlight as expected', () => {
      const { container } = renderDark(<StyledCodeBlockLine isHighlighted />);

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        rgba(PALETTE.white, DEFAULT_THEME.opacity[100])
      );
    });

    it('renders as expected in light mode', () => {
      const { container } = render(<StyledCodeBlockLine isHighlighted />);

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        rgba(PALETTE.grey[700], DEFAULT_THEME.opacity[100])
      );
    });
  });

  describe('line numbers', () => {
    it('renders line numbers as expected', () => {
      const { container } = renderDark(<StyledCodeBlockLine isNumbered />);

      expect(container.firstChild).toHaveStyleRule('display', 'table-cell', {
        modifier: '&::before'
      });
    });

    it('renders as expected in light mode', () => {
      const { container } = render(<StyledCodeBlockLine isNumbered />);

      expect(container.firstChild).toHaveStyleRule('color', PALETTE.grey[600], {
        modifier: '&::before'
      });
    });
  });

  describe('size', () => {
    it('renders small size', () => {
      const { container } = render(<StyledCodeBlockLine size="small" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '11px');
    });

    it('renders medium size', () => {
      const { container } = render(<StyledCodeBlockLine size="medium" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '13px');
    });

    it('renders large size', () => {
      const { container } = render(<StyledCodeBlockLine size="large" />);

      expect(container.firstChild).toHaveStyleRule('font-size', '17px');
    });
  });

  describe('diff', () => {
    it('renders add diff', () => {
      const { container } = render(<StyledCodeBlockLine diff="add" />);

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        rgba(PALETTE.lime[400], DEFAULT_THEME.opacity[300])
      );
    });

    it('renders delete diff', () => {
      const { container } = render(<StyledCodeBlockLine diff="delete" />);

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        rgba(PALETTE.crimson[400], DEFAULT_THEME.opacity[300])
      );
    });

    it('renders change diff', () => {
      const { container } = render(<StyledCodeBlockLine diff="change" />);

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        rgba(PALETTE.lemon[400], DEFAULT_THEME.opacity[300])
      );
    });

    it('renders hunk diff', () => {
      const { container } = render(<StyledCodeBlockLine diff="hunk" />);

      expect(container.firstChild).toHaveStyleRule(
        'background-color',
        rgba(PALETTE.royal[400], DEFAULT_THEME.opacity[300])
      );
    });
  });
});
