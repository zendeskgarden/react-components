/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render, renderRtl } from 'garden-test-utils';
import { StyledToggleInput } from './StyledToggleInput';
import { StyledToggleLabel } from './StyledToggleLabel';

describe('StyledToggleInput', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledToggleInput />);

    expect(container.firstChild!.nodeName).toBe('INPUT');
    expect(container.firstChild).toHaveStyleRule('border-radius', '100px', {
      modifier: `&~${StyledToggleLabel}::before`
    });
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledToggleInput />);

    expect(container.firstChild).toHaveStyleRule('right', expect.any(String), {
      modifier: `&~${StyledToggleLabel}>svg`
    });
  });
});
