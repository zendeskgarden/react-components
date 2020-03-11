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

describe('Step', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <Stepper activeIndex={0} isHorizontal>
        <Step data-test-id="step" ref={ref} />
      </Stepper>
    );

    expect(getByTestId('step')).toBe(ref.current);
  });

  it('renders a step line before each step in a horizontal stepper', () => {
    const steps = [1, 2, 3];
    const { queryAllByTestId } = render(
      <Stepper activeIndex={0} isHorizontal>
        {steps.map(step => (
          <Step key={step} />
        ))}
      </Stepper>
    );

    expect(queryAllByTestId('step-line').length).toBe(steps.length);
  });

  it('does not render a step line before each step in a vertical stepper', () => {
    const steps = [1, 2, 3];
    const { queryAllByTestId } = render(
      <Stepper activeIndex={0} isHorizontal={false}>
        {steps.map(step => (
          <Step key={step} />
        ))}
      </Stepper>
    );

    expect(queryAllByTestId('step-line').length).toBe(0);
  });
});
