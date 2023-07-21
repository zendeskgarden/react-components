/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, ReactElement, cloneElement, forwardRef, useMemo } from 'react';
import { IStepperProps } from '../../types';
import { StyledStepper } from '../../styled';
import { StepperContext } from '../../utils';
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
              Children.toArray(children).map((child, _currentIndex) =>
                cloneElement(child as ReactElement, { _currentIndex })
              ),
            [children]
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
