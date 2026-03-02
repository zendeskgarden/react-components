/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';

import { PALETTE } from '@zendeskgarden/react-theming';
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
    const { container } = render(<StyledAnchor $isDanger />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.red[700]);
  });

  it('renders expected RTL direction', () => {
    const { container } = renderRtl(<StyledAnchor />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('supports "as" prop', () => {
    const CustomAnchor = (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      return (
        <a id="custom-anchor" {...props}>
          Custom text
        </a>
      );
    };

    const { container } = render(<StyledAnchor as={CustomAnchor} href="#" />);

    expect(container.firstChild!.nodeName).toBe('A');
    expect(container.firstChild!.textContent).toBe('Custom text');
    expect(container.firstChild).toHaveAttribute('id', 'custom-anchor');
    expect(container.firstChild).toHaveAttribute('href', '#');
  });

  describe('`data-garden-id` attribute', () => {
    it('has the correct `data-garden-id`', () => {
      const { container } = render(<StyledAnchor />);

      expect(container.firstChild).toHaveAttribute('data-garden-id', 'buttons.anchor');
    });
  });
});
