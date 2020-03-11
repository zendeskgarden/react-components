/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledIcon } from './StyledIcon';
import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

describe('StyledIcon', () => {
  it('renders default styles', () => {
    const { container } = render(<StyledIcon />);

    expect(container.firstChild).toHaveStyleRule(
      'color',
      getColor('neutralHue', 800, DEFAULT_THEME)
    );
    expect(container.firstChild).toHaveStyleRule(
      'background',
      getColor('neutralHue', 200, DEFAULT_THEME)
    );
    expect(container.firstChild).toHaveStyleRule('margin-right', '12px');
    expect(container.firstChild).not.toHaveStyleRule('margin-bottom');
  });
  it('renders active color styles', () => {
    const { container } = render(<StyledIcon isActive />);

    expect(container.firstChild).toHaveStyleRule('color', DEFAULT_THEME.colors.background);
    expect(container.firstChild).toHaveStyleRule(
      'background',
      getColor('neutralHue', 600, DEFAULT_THEME)
    );
  });

  it('renders correct icon styles for horizontal stepper', () => {
    const { container } = render(<StyledIcon isActive isHorizontal />);

    expect(container.firstChild).not.toHaveStyleRule('margin-right');
    expect(container.firstChild).toHaveStyleRule('margin-bottom', `${DEFAULT_THEME.space.base}px`);
  });
});
