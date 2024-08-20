/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledStepper } from './StyledStepper';

describe('StyledStepper', () => {
  it('renders default styling correctly', () => {
    const { container } = render(<StyledStepper />);

    expect(container.firstChild).not.toHaveStyleRule('display');
  });

  it('renders horizontal styling correctly', () => {
    const { container } = render(<StyledStepper $isHorizontal />);

    expect(container.firstChild).toHaveStyleRule('display', 'flex');
  });
});
