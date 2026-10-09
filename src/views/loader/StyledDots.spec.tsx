/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { StyledDotsCircleOne, StyledDotsCircleTwo, StyledDotsCircleThree } from '.';

describe('StyledDots', () => {
  it(`applies correct cx coordinates`, () => {
    const cx = [9, 40, 71];

    [StyledDotsCircleOne as any, StyledDotsCircleTwo as any, StyledDotsCircleThree as any].forEach(
      (Circle, index) => {
        const { getByTestId } = render(
          <svg>
            <Circle data-test-id={`circle-${index}`} />
          </svg>
        );

        expect(getByTestId(`circle-${index}`)).toHaveAttribute('cx', `${cx[index]}`);
      }
    );
  });
});
