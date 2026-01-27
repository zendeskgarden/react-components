/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { render } from 'garden-test-utils';
import React from 'react';

import { Stepper } from '../Stepper';

describe('Step', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLLIElement>();
    const { getByTestId } = render(
      <Stepper>
        <Stepper.Step data-test-id="step" ref={ref} />
      </Stepper>
    );

    expect(getByTestId('step')).toBe(ref.current);
  });

  it('renders a step line before each step in a horizontal stepper', () => {
    const steps = [1, 2, 3];
    const { queryAllByTestId } = render(
      <Stepper isHorizontal>
        {steps.map(step => (
          <Stepper.Step key={step} />
        ))}
      </Stepper>
    );

    expect(queryAllByTestId('step-line')).toHaveLength(steps.length);
  });

  it('does not render a step line before each step in a vertical stepper', () => {
    const steps = [1, 2, 3];
    const { queryAllByTestId } = render(
      <Stepper activeIndex={0}>
        {steps.map(step => (
          <Stepper.Step key={step} />
        ))}
      </Stepper>
    );

    expect(queryAllByTestId('step-line')).toHaveLength(0);
  });

  it('does not change step number when running outside strict mode', async () => {
    const { findAllByText } = render(
      <Stepper>
        <Stepper.Step>
          <Stepper.Label />
        </Stepper.Step>
        <Stepper.Step>
          <Stepper.Label />
        </Stepper.Step>
      </Stepper>
    );

    const elements = await findAllByText(/1|2/u);

    expect(elements[0]).toContainHTML('1');
    expect(elements[1]).toContainHTML('2');
  });

  it('does not change step number when running in strict mode', async () => {
    const { findAllByText } = render(
      <React.StrictMode>
        <Stepper>
          <Stepper.Step>
            <Stepper.Label />
          </Stepper.Step>
          <Stepper.Step>
            <Stepper.Label />
          </Stepper.Step>
        </Stepper>
      </React.StrictMode>
    );

    const elements = await findAllByText(/1|2/u);

    expect(elements[0]).toContainHTML('1');
    expect(elements[1]).toContainHTML('2');
  });
});
