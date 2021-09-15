/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledCheckIcon } from './StyledCheckIcon';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

describe('StyledCheckIcon', () => {
  it('renders a light check icon on a dark background', () => {
    const { container } = render(<StyledCheckIcon color="#000" />);

    expect(container.firstChild).toHaveStyleRule('color', DEFAULT_THEME.colors.background);
  });

  it('renders a dark check icon on a light background', () => {
    const { container } = render(<StyledCheckIcon color="#FFF" />);

    expect(container.firstChild).toHaveStyleRule('color', DEFAULT_THEME.palette.grey[800]);
  });
});
