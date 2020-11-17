/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { Blockquote } from './Blockquote';
import { StyledBlockquote } from '../styled';

describe('Blockquote', () => {
  it('applies correct styling with RTL locale', () => {
    const { container } = renderRtl(<Blockquote />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLElement>();
    const { container } = render(<Blockquote ref={ref} />);

    expect(container.firstChild).toBe(ref.current);
  });

  describe('size', () => {
    it('renders small styling if provided', () => {
      const { container } = render(<Blockquote size="small" />);

      expect(container.firstChild).toHaveStyleRule('margin-top', DEFAULT_THEME.lineHeights.sm, {
        modifier: ` + ${StyledBlockquote}`
      });
    });

    it('renders medium styling if provided', () => {
      const { container } = render(<Blockquote size="medium" />);

      expect(container.firstChild).toHaveStyleRule('margin-top', DEFAULT_THEME.lineHeights.md, {
        modifier: ` + ${StyledBlockquote}`
      });
    });

    it('renders large styling if provided', () => {
      const { container } = render(<Blockquote size="large" />);

      expect(container.firstChild).toHaveStyleRule('margin-top', DEFAULT_THEME.lineHeights.lg, {
        modifier: ` + ${StyledBlockquote}`
      });
    });
  });
});
