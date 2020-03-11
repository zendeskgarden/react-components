/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledLabel } from './StyledLabel';
import { getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

describe('StyledLabel', () => {
  it('renders default styles', () => {
    const { container } = render(<StyledLabel />);

    expect(container.firstChild).not.toHaveStyleRule('flex');
    expect(container.firstChild).not.toHaveStyleRule('flex-direction');
    expect(container.firstChild).not.toHaveStyleRule('font-weight');
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
    expect(container.firstChild).toHaveStyleRule('text-align', 'center');
    expect(container.firstChild).toHaveStyleRule(
      'color',
      getColor('neutralHue', 600, DEFAULT_THEME)
    );
  });

  it('renders styles for horizontal label', () => {
    const { container } = render(<StyledLabel isHorizontal />);

    expect(container.firstChild).not.toHaveStyleRule('display');
    expect(container.firstChild).toHaveStyleRule('flex', '1');
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
  });

  it('renders styles for active label', () => {
    const { container } = render(<StyledLabel isActive />);

    expect(container.firstChild).toHaveStyleRule(
      'color',
      getColor('neutralHue', 800, DEFAULT_THEME)
    );
    expect(container.firstChild).toHaveStyleRule('font-weight', '600');
  });
});
