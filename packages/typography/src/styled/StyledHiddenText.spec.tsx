/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledHiddenText } from './StyledHiddenText';

describe('StyledHiddenText', () => {
  it('renders visually hidden, but available to assistive technology', () => {
    const { container } = render(<StyledHiddenText />);

    expect(container.firstChild).toHaveStyleRule('border', '0');
    expect(container.firstChild).toHaveStyleRule('clip', 'rect(0 0 0 0)');
    expect(container.firstChild).toHaveStyleRule('height', '1px');
    expect(container.firstChild).toHaveStyleRule('margin', '-1px');
    expect(container.firstChild).toHaveStyleRule('overflow', 'hidden');
    expect(container.firstChild).toHaveStyleRule('padding', '0');
    expect(container.firstChild).toHaveStyleRule('position', 'absolute');
    expect(container.firstChild).toHaveStyleRule('white-space', 'nowrap');
    expect(container.firstChild).toHaveStyleRule('width', '1px');
  });
});
