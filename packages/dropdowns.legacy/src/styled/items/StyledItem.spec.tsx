/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { getColorV8, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledItem } from './StyledItem';

describe('StyledItem', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledItem />);

    expect(container.firstChild!.nodeName).toBe('LI');
  });

  it('renders default styling', () => {
    const { container } = render(<StyledItem />);

    expect(container.firstChild).toHaveStyleRule('color', DEFAULT_THEME.colors.foreground);
  });

  it('renders danger styling if provided', () => {
    const { container } = render(<StyledItem isDanger />);

    expect(container.firstChild).toHaveStyleRule('color', getColorV8('dangerHue'));
  });

  it('render danger focus styling if provided', () => {
    const { container } = render(<StyledItem isDanger isFocused />);

    expect(container.firstChild).toHaveStyleRule(
      'background-color',
      getColorV8('dangerHue', 600, DEFAULT_THEME, 0.08)
    );
  });
});
