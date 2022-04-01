/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes, useLayoutEffect, useMemo, useState } from 'react';
import { StyledStep, StyledLine } from '../../../styled';
import { StepContext, useStepperContext } from '../../../utils';

const StepComponent = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>((props, ref) => {
  const { currentIndexRef, isHorizontal } = useStepperContext();
  const [currentStepIndex, setIndex] = useState(currentIndexRef.current);

  useLayoutEffect(() => {
    setIndex(currentIndexRef.current);
    currentIndexRef.current++;
    const currentIndex = currentIndexRef;

    return () => {
      currentIndex.current--;
    };
  }, [currentIndexRef]);

  const value = useMemo(() => ({ currentStepIndex }), [currentStepIndex]);

  return (
    <StepContext.Provider value={value}>
      <StyledStep ref={ref} isHorizontal={isHorizontal} {...props}>
        {isHorizontal && <StyledLine data-test-id="step-line" />}
        {props.children}
      </StyledStep>
    </StepContext.Provider>
  );
});

StepComponent.displayName = 'Stepper.Step';

/**
 * @extends LiHTMLAttributes<HTMLLIElement>
 */
export const Step = StepComponent;
