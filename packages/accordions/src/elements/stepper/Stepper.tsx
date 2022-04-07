/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef, useEffect, forwardRef, useMemo } from 'react';
import { IStepperProps } from '../../types';
import { StyledStepper } from '../../styled';
import { StepperContext } from '../../utils';
import { Step } from './components/Step';
import { Label } from './components/Label';
import { Content } from './components/Content';

const StepperComponent = forwardRef<HTMLOListElement, IStepperProps>(
  ({ isHorizontal, activeIndex, ...props }, ref) => {
    const currentIndexRef = useRef(0);
    const stepperContext = useMemo(
      () => ({
        isHorizontal: isHorizontal || false,
        activeIndex: activeIndex!,
        currentIndexRef
      }),
      [isHorizontal, activeIndex, currentIndexRef]
    );

    useEffect(() => {
      currentIndexRef.current = 0;
    });

    return (
      <StepperContext.Provider value={stepperContext}>
        <StyledStepper ref={ref} isHorizontal={isHorizontal} {...props} />
      </StepperContext.Provider>
    );
  }
);

StepperComponent.displayName = 'Stepper';

StepperComponent.defaultProps = {
  activeIndex: 0
};

/**
 * @extends OlHTMLAttributes<HTMLOListElement>
 */
export const Stepper = StepperComponent as typeof StepperComponent & {
  Content: typeof Content;
  Label: typeof Label;
  Step: typeof Step;
};

Stepper.Content = Content;
Stepper.Label = Label;
Stepper.Step = Step;
