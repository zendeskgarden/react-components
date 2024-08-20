/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { PALETTE } from '@zendeskgarden/react-theming';
import { StyledItem } from './StyledItem';

describe('StyledItem', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledItem />);

    expect(container.firstChild!.nodeName).toBe('LI');
  });

  it('renders default styling', () => {
    const { container } = render(<StyledItem />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.grey[900]);
  });

  it('renders danger styling if provided', () => {
    const { container } = render(<StyledItem isDanger />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE.red[700]);
  });
});
