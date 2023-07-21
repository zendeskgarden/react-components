/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo, LiHTMLAttributes } from 'react';
import { StyledStep, StyledLine } from '../../../styled';
import { StepContext, useStepperContext } from '../../../utils';

const StepComponent = forwardRef<
  HTMLLIElement,
  LiHTMLAttributes<HTMLLIElement> & {
    /**
     * @ignore
     */
    _currentIndex: number;
  }
>(({ _currentIndex, children, ...props }, ref) => {
  const { activeIndex, isHorizontal } = useStepperContext();

  const stepContextValue = useMemo(
    () => ({
      currentStepIndex: _currentIndex,
      isActive: activeIndex === _currentIndex,
      isCompleted: activeIndex > _currentIndex,
      isHorizontal
    }),
    [isHorizontal, activeIndex, _currentIndex]
  );

  return (
    <StepContext.Provider value={stepContextValue}>
      <StyledStep ref={ref} isHorizontal={isHorizontal} {...props}>
        {isHorizontal && <StyledLine data-test-id="step-line" />}
        {children}
      </StyledStep>
    </StepContext.Provider>
  );
});

StepComponent.displayName = 'Stepper.Step';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Step = StepComponent;
