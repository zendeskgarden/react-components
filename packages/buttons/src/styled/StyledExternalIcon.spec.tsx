/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledExternalIcon } from './StyledExternalIcon';

describe('StyledExternalIcon', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledExternalIcon />);

    expect(container.firstChild!.nodeName).toBe('svg');
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledExternalIcon />);

    expect(container.firstChild).toHaveStyleRule('transform', 'scaleX(-1)');
  });
});
