/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { render } from 'garden-test-utils';
import { Stepper } from '../Stepper';
import { Step } from './Step';
import { StepLabel } from './StepLabel';

describe('StepLabel', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <Stepper activeIndex={0} isHorizontal>
        <Step>
          <StepLabel ref={ref} data-test-id="step-label" />
        </Step>
      </Stepper>
    );

    expect(getByTestId('step-label')).toBe(ref.current);
  });
});
