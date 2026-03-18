/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledField } from './StyledField';

describe('StyledField', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledField />);

    expect(container.firstChild!.nodeName).toBe('DIV');
  });

  it('renders expected RTL styling', () => {
    const { container } = renderRtl(<StyledField />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
