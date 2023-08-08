/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, forwardRef, isValidElement, useMemo } from 'react';
import { IStepperProps } from '../../types';
import { StyledStepper } from '../../styled';
import { StepContext, StepperContext } from '../../utils';
import { Step } from './components/Step';
import { Label } from './components/Label';
import { Content } from './components/Content';

const StepperComponent = forwardRef<HTMLOListElement, IStepperProps>(
  ({ isHorizontal, activeIndex, children, ...props }, ref) => {
    const stepperContext = useMemo(
      () => ({
        isHorizontal: isHorizontal || false,
        activeIndex: activeIndex!
      }),
      [isHorizontal, activeIndex]
    );

    return (
      <StepperContext.Provider value={stepperContext}>
        <StyledStepper ref={ref} isHorizontal={isHorizontal} {...props}>
          {useMemo(
            () =>
              Children.toArray(children)
                .filter(isValidElement)
                .map((child, index) => (
                  <StepContext.Provider
                    key={index}
                    // eslint-disable-next-line react/jsx-no-constructed-context-values
                    value={{
                      currentStepIndex: index,
                      isActive: stepperContext.activeIndex === index,
                      isCompleted: stepperContext.activeIndex > index,
                      isHorizontal: stepperContext.isHorizontal
                    }}
                  >
                    {child}
                  </StepContext.Provider>
                )),
            [children, stepperContext]
          )}
        </StyledStepper>
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
