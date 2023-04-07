/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledGrip } from './StyledGrip';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';

describe('StyledGrip', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledGrip />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledGrip />);

    expect(container.firstChild).toHaveStyleRule('margin-left', DEFAULT_THEME.space.xs);
  });
});
