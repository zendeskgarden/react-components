/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo, LiHTMLAttributes } from 'react';
import { StyledStep, StyledLine } from '../../../styled';
import { StepContext, useStepperContext } from '../../../utils';

const StepComponent = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>(
  ({ children, ...props }, ref) => {
    // @ts-expect-error ignoring private prop that is assigned
    // from Stepper when iterating over its children.
    const currentIndex = props._currentIndex;
    const { activeIndex, isHorizontal } = useStepperContext();

    const stepContextValue = useMemo(
      () => ({
        currentStepIndex: currentIndex,
        isActive: activeIndex === currentIndex,
        isCompleted: activeIndex > currentIndex,
        isHorizontal
      }),
      [isHorizontal, activeIndex, currentIndex]
    );

    return (
      <StepContext.Provider value={stepContextValue}>
        <StyledStep ref={ref} isHorizontal={isHorizontal} {...props}>
          {isHorizontal && <StyledLine data-test-id="step-line" />}
          {children}
        </StyledStep>
      </StepContext.Provider>
    );
  }
);

StepComponent.displayName = 'Stepper.Step';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Step = StepComponent;
