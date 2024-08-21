/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes } from 'react';
import { StyledStep, StyledLine } from '../../../styled';
import { useStepperContext } from '../../../utils';

const StepComponent = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>(
  ({ children, ...props }, ref) => {
    const { isHorizontal } = useStepperContext();

    return (
      <StyledStep ref={ref} $isHorizontal={isHorizontal} {...props}>
        {!!isHorizontal && <StyledLine data-test-id="step-line" />}
        {children}
      </StyledStep>
    );
  }
);

StepComponent.displayName = 'Stepper.Step';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Step = StepComponent;
