/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledLabel } from './StyledLabel';
import { PALETTE_V8 } from '@zendeskgarden/react-theming';

describe('StyledLabel', () => {
  it('renders default styles', () => {
    const { container } = render(<StyledLabel />);

    expect(container.firstChild).not.toHaveStyleRule('font-weight');
    expect(container.firstChild).not.toHaveStyleRule('text-align');
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
    expect(container.firstChild).toHaveStyleRule('color', PALETTE_V8.grey[600]);
  });

  it('renders styles for horizontal label', () => {
    const { container } = render(<StyledLabel isHorizontal />);

    expect(container.firstChild).not.toHaveStyleRule('display');
    expect(container.firstChild).not.toHaveStyleRule('flex');
    expect(container.firstChild).not.toHaveStyleRule('align-items');
    expect(container.firstChild).toHaveStyleRule('text-align', 'center');
  });

  it('renders styles for active label', () => {
    const { container } = render(<StyledLabel isActive />);

    expect(container.firstChild).toHaveStyleRule('color', PALETTE_V8.grey[800]);
    expect(container.firstChild).toHaveStyleRule('font-weight', '600');
  });
});
