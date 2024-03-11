/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { getColorV8, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledButton } from './StyledButton';

describe('StyledButton', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledButton />);

    expect(container.firstChild).toHaveStyleRule('padding', '20px');
    expect(container.firstChild).toHaveStyleRule('text-align', 'left');
    expect(container.firstChild).toHaveStyleRule('color', '#2f3941');
    expect(container.firstChild).not.toHaveStyleRule('cursor');
  });

  it('renders isCompact styling correctly', () => {
    const { container } = render(<StyledButton isCompact />);

    expect(container.firstChild).toHaveStyleRule('padding', '8px 12px');
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledButton />);

    expect(container.firstChild).toHaveStyleRule('text-align', 'right');
  });

  it('renders isHovered styling correctly', () => {
    const { container } = render(<StyledButton isHovered />);

    expect(container.firstChild).toHaveStyleRule(
      'color',
      getColorV8('primaryHue', 600, DEFAULT_THEME)
    );

    expect(container.firstChild).toHaveStyleRule('cursor', 'pointer', {
      modifier: '&:hover'
    });
  });
});
