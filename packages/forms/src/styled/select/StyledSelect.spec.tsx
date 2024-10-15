/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledSelect } from './StyledSelect';

describe('StyledSelect', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledSelect />);

    expect(container.firstChild!.nodeName).toBe('SELECT');
  });

  it('renders bare styling if provided', () => {
    const { container } = render(<StyledSelect $isBare />);

    expect(container.firstChild).not.toHaveStyleRule('padding-right');
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledSelect />);

    expect(container.firstChild).toHaveStyleRule('padding-left', '36px');
  });
});
