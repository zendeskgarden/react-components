/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { Children, forwardRef, isValidElement, useMemo } from 'react';

import { StepProvider } from '../../context/accordion/StepContext';
import { StepperProvider } from '../../context/accordion/StepperContext';
import { IStepperProps } from '../../types/elements';
import { StyledStepper } from '../../views/accordion/StyledStepper';
import { COMPONENT_IDS } from '../utils';
import { Step } from './Step';
import { Content } from './StepperContent';
import { Label } from './StepperLabel';

const DEFAULT_ACTIVE_INDEX = 0;

const StepperComponent = forwardRef<HTMLOListElement, IStepperProps>(
  ({ activeIndex = DEFAULT_ACTIVE_INDEX, isHorizontal, children, ...props }, ref) => {
    const stepperContext = useMemo(
      () => ({
        activeIndex,
        isHorizontal: isHorizontal || false
      }),
      [activeIndex, isHorizontal]
    );

    return (
      <StepperProvider value={stepperContext}>
        <StyledStepper
          ref={ref}
          $isHorizontal={isHorizontal}
          {...props}
          data-garden-id={COMPONENT_IDS['accordions.stepper']}
          data-garden-version={PACKAGE_VERSION}
        >
          {useMemo(
            () =>
              Children.toArray(children)
                .filter(isValidElement)
                .map((child, index) => (
                  <StepProvider
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    value={{
                      currentStepIndex: index,
                      isActive: stepperContext.activeIndex === index,
                      isCompleted: stepperContext.activeIndex > index,
                      isHorizontal: stepperContext.isHorizontal
                    }}
                  >
                    {child}
                  </StepProvider>
                )),
            [children, stepperContext]
          )}
        </StyledStepper>
      </StepperProvider>
    );
  }
);

StepperComponent.displayName = 'Stepper';

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
