/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledSpinnerCircle } from '.';

describe('StyledSpinnerCircle', () => {
  it('applies transform correctly', () => {
    const { getByTestId } = render(
      <svg>
        <StyledSpinnerCircle
          $strokeWidthValue={25}
          $dasharrayValue={30}
          transform="2"
          data-test-id="circle"
        />
      </svg>
    );

    const circle = getByTestId('circle');

    expect(circle).toHaveAttribute('stroke-width', '25');
    expect(circle).toHaveAttribute('stroke-dasharray', '30 250');
    expect(circle).toHaveAttribute('transform', '2');
  });
});
