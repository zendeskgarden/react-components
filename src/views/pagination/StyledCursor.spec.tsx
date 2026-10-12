/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledCursor } from './StyledCursor';

describe('StyledCursor', () => {
  it('renders default styling', () => {
    const { container } = render(<StyledCursor />);

    expect(container.firstChild).not.toHaveStyleRule('margin-left');
    expect(container.firstChild).toHaveStyleRule('margin-right', '4px', {
      modifier: '&:not(:last-of-type)'
    });
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledCursor />);

    expect(container.firstChild).not.toHaveStyleRule('margin-left');
    expect(container.firstChild).toHaveStyleRule('margin-right', '4px', {
      modifier: '&:not(:first-of-type)'
    });
  });
});
