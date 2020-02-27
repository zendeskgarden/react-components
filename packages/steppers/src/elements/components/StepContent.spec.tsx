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
import { StepContent } from './StepContent';

describe('StepContent', () => {
  it('passes ref to underlying DOM element', () => {
    const ref = React.createRef<HTMLDivElement>();
    const { getByTestId } = render(
      <Stepper activeIndex={0} isHorizontal={false}>
        <Step>
          <StepContent ref={ref} data-test-id="step-content" />
        </Step>
      </Stepper>
    );

    expect(getByTestId('step-content')).toBe(ref.current);
  });

  it('renders null for a horizontal Stepper', () => {
    const { queryByText } = render(
      <Stepper activeIndex={0} isHorizontal>
        <Step>
          <StepContent>Some content</StepContent>
        </Step>
      </Stepper>
    );

    expect(queryByText('Some content')).toBeNull();
  });

  it('renders StepContent for a vertical Stepper', () => {
    const { queryByText } = render(
      <Stepper activeIndex={0} isHorizontal={false}>
        <Step>
          <StepContent>Some content</StepContent>
        </Step>
      </Stepper>
    );

    expect(queryByText('Some content')).not.toBeNull();
  });
});
