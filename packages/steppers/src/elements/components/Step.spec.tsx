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
    const { getByTestId } = render(
      <Stepper activeIndex={0} isHorizontal>
        <Step />
      </Stepper>
    );

    expect(getByTestId('step-line')).toBeTruthy();
  });

  it('does not render a step line before each step in a vertical stepper', () => {
    const { queryByTestId } = render(
      <Stepper activeIndex={0} isHorizontal={false}>
        <Step />
      </Stepper>
    );

    expect(queryByTestId('step-line')).toBeNull();
  });
});
