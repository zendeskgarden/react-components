/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, {
  useRef,
  useEffect,
  forwardRef,
  HTMLAttributes,
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes
} from 'react';
import { StyledStepper } from '../../styled';
import { StepperContext } from '../../utils';
import { Step } from './components/Step';
import { Label } from './components/Label';
import { Content } from './components/Content';

interface IStaticStepperExport<T, P>
  extends ForwardRefExoticComponent<PropsWithoutRef<P> & RefAttributes<T>> {
  Step: typeof Step;
  Label: typeof Label;
  Content: typeof Content;
}

interface IStepperProps extends HTMLAttributes<HTMLOListElement> {
  /** Used to show the current step and compute completed steps */
  activeIndex?: number;
  /** Displays the Stepper in a horizontal layout */
  isHorizontal?: boolean;
}

/**
 * Accepts all `<ol>` attributes and events. Also accepts sub-components:

 *  - `Stepper.Step`
 *  - `Stepper.Label`
 *  - `Stepper.Content`
 * 
 * @extends HTMLOListElement
 */
// eslint-disable-next-line react/display-name
export const Stepper = forwardRef<HTMLOListElement, IStepperProps>(
  ({ isHorizontal, activeIndex, ...props }, ref) => {
    const currentIndexRef = useRef(0);
    const stepperContext = {
      isHorizontal: isHorizontal!,
      activeIndex: activeIndex!,
      currentIndexRef
    };

    useEffect(() => {
      currentIndexRef.current = 0;
    });

    return (
      <StepperContext.Provider value={stepperContext}>
        <StyledStepper ref={ref} isHorizontal={isHorizontal} {...props} />
      </StepperContext.Provider>
    );
  }
) as IStaticStepperExport<HTMLDivElement, IStepperProps>;

Stepper.Step = Step;
Stepper.Label = Label;
Stepper.Content = Content;

Stepper.displayName = 'Stepper';

Stepper.defaultProps = {
  activeIndex: 0,
  isHorizontal: false
};
