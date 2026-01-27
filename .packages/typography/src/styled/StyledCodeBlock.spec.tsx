/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { PALETTE } from '@zendeskgarden/react-theming';
import { render, renderRtl } from 'garden-test-utils';
import React from 'react';

import { StyledCodeBlock } from './StyledCodeBlock';

describe('StyledCodeBlock', () => {
  it('renders the expected element', () => {
    const { container } = render(<StyledCodeBlock />);

    expect(container.firstChild!.nodeName).toBe('PRE');
  });

  it('renders expected RTL direction', () => {
    const { container } = renderRtl(<StyledCodeBlock />);

    expect(container.firstChild).toHaveStyleRule('direction', 'ltr');
  });

  it('renders as expected in light mode', () => {
    const { container } = render(<StyledCodeBlock />);

    expect(container.firstChild).toHaveStyleRule('background-color', PALETTE.grey[100]);
  });
});
