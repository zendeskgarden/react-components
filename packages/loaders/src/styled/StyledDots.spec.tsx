/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { StyledDotsCircleOne, StyledDotsCircleTwo, StyledDotsCircleThree } from '.';

describe('StyledDots', () => {
  const cx = [9, 40, 71];

  [StyledDotsCircleOne as any, StyledDotsCircleTwo as any, StyledDotsCircleThree as any].forEach(
    (Circle, index) => {
      it(`applies correct cx=${cx[index]} coord`, () => {
        const { getByTestId } = render(
          <svg>
            <Circle data-test-id="circle" />
          </svg>
        );

        expect(getByTestId('circle')).toHaveAttribute('cx', `${cx[index]}`);
      });
    }
  );
});
