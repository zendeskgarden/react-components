/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledParagraph } from './StyledParagraph';

describe('StyledParagraph', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledParagraph />);

    expect(container.firstChild!.nodeName).toBe('P');
  });

  it('renders expected RTL direction', () => {
    const { container } = renderRtl(<StyledParagraph />);

    expect(container.firstChild).toHaveStyleRule('direction', 'rtl');
  });
});
