/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useRef,
  forwardRef,
  HTMLAttributes,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes
} from 'react';
import { StyledStepper } from '../styled';
import { StepperContext } from '../utils';
import { Step } from './components/Step';
import { StepLabel } from './components/StepLabel';
import { StepContent } from './components/StepContent';

interface IStaticStepperExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Step: typeof Step;
  Content: typeof StepContent;
  Label: typeof StepLabel;
}

interface IStepperProps extends HTMLAttributes<HTMLDivElement> {
  isHorizontal: boolean;
  activeIndex: number;
}

/**
 * Accepts all `<div>` attributes and events. Also accepts static properties:

 *  - `Stepper.Step`
 *  - `Stepper.StepLabel`
 *  - `Stepper.StepContent`
 */
// eslint-disable-next-line react/display-name
export const Stepper = forwardRef<HTMLDivElement, IStepperProps>(
  ({ isHorizontal, activeIndex, ...props }, ref) => {
    const currentIndexRef = useRef(0);
    const stepperContext = { isHorizontal, activeIndex, currentIndexRef };

    return (
      <StepperContext.Provider value={stepperContext}>
        <StyledStepper ref={ref} isHorizontal={isHorizontal} {...props} />
      </StepperContext.Provider>
    );
  }
) as IStaticStepperExport<HTMLDivElement, IStepperProps>;

Stepper.Step = Step;
Stepper.Label = StepLabel;
Stepper.Content = StepContent;

Stepper.displayName = 'Stepper';

Stepper.defaultProps = {
  isHorizontal: false,
  activeIndex: 0
};
