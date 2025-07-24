/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledModal } from './StyledModal';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

describe('StyledModal', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledModal />);

    expect(container.firstChild).not.toHaveStyleRule('width');
    expect(container.firstChild).toHaveStyleRule('width', DEFAULT_THEME.breakpoints.sm, {
      media: `(min-width:  ${DEFAULT_THEME.breakpoints.sm})`
    });
    expect(container.firstChild).toHaveStyleRule('margin', '48px');
    expect(container.firstChild).not.toHaveStyleRule('direction');
    expect(container.firstChild).not.toHaveStyleRule('animation-duration', '0.3s');
    expect(container.firstChild).not.toHaveStyleRule('animation-timing-function', 'ease-in-out');
    expect(container.firstChild).toHaveStyleRule('max-height', 'calc(100vh - 96px)');
    expect(container.firstChild).toHaveStyleRule('max-height', 'calc(100vh - 48px)', {
      media: `(max-height:  399px)`
    });
  });

  it('renders RTL styling if provided', () => {
    const { container } = renderRtl(<StyledModal />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });

  it('renders large styling if provided', () => {
    const { container } = render(<StyledModal $isLarge />);

    expect(container.firstChild).toHaveStyleRule('width', DEFAULT_THEME.breakpoints.md, {
      media: `(min-width:  ${DEFAULT_THEME.breakpoints.md})`
    });
  });

  it('renders centered styling if provided', () => {
    const { container } = render(<StyledModal $isCentered />);

    expect(container.firstChild).toHaveStyleRule('margin', '0');
  });
});
