/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledDayLabelHeader } from './StyledDayLabelHeader';

describe('StyledDayLabelHeader', () => {
  it('renders at the default size when not compact', () => {
    const { container } = render(<StyledDayLabelHeader />);

    expect(container.firstChild).toHaveStyleRule('width', '40px');
    expect(container.firstChild).toHaveStyleRule('height', '40px');
  });

  it('shrinks to match the day buttons when compact', () => {
    const { container } = render(<StyledDayLabelHeader $isCompact />);

    expect(container.firstChild).toHaveStyleRule('width', '32px');
    expect(container.firstChild).toHaveStyleRule('height', '32px');
  });
});
