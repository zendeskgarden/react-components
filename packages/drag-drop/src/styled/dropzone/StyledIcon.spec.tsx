/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledIcon } from './StyledIcon';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

describe('StyledIcon', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledIcon />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledIcon />);

    expect(container.firstChild).toHaveStyleRule('margin-left', DEFAULT_THEME.space.xs);
  });
});
