/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import StyledCheckHint from './StyledCheckHint';

describe('StyledCheckHint', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledCheckHint />);

    expect(container.firstChild).toHaveClass('c-chk__hint');
  });

  it('renders RTL styling correctly', () => {
    const { container } = renderRtl(<StyledCheckHint />);

    expect(container.firstChild).toHaveClass('is-rtl');
  });
});
