/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, HTMLAttributes } from 'react';
import { StyledStepper } from '../styled';
import { StepperContext } from '../utils';

interface IStepperProps extends HTMLAttributes<HTMLDivElement> {
  isHorizontal: boolean;
  activeIndex: number;
}

/**
 * Accepts all `<div>` attributes and events
 */
export const Stepper = React.forwardRef<
  HTMLDivElement,
  IStepperProps & React.HTMLAttributes<HTMLDivElement>
>(({ isHorizontal, activeIndex, ...props }, ref) => {
  const currentIndexRef = useRef(0);
  const stepperContext = { isHorizontal, activeIndex, currentIndexRef };

  return (
    <StepperContext.Provider value={stepperContext}>
      <StyledStepper ref={ref} isHorizontal={isHorizontal} {...props} />
    </StepperContext.Provider>
  );
});

Stepper.displayName = 'Stepper';

Stepper.defaultProps = {
  isHorizontal: false,
  activeIndex: 0
};
