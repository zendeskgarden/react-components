/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledLabelText } from './StyledLabelText';

describe('StyledLabelText', () => {
  it('renders default styles', () => {
    const { container } = render(<StyledLabelText />);

    expect(container.firstChild).not.toHaveStyleRule('display');
    expect(container.firstChild).not.toHaveStyleRule('padding');
    expect(container.firstChild).not.toHaveStyleRule('word-wrap');
  });
  it('renders the horizontal style', () => {
    const { container } = render(<StyledLabelText $isHorizontal />);

    expect(container.firstChild).toHaveStyleRule('padding', '0 12px');
    expect(container.firstChild).toHaveStyleRule('word-wrap', 'break-word');
  });

  it('renders hidden label styling', () => {
    const { container } = render(<StyledLabelText $isHidden />);

    expect(container.firstChild).toHaveStyleRule('display', 'none');
  });
});
