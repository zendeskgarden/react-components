/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useRef } from 'react';
import { StyledStep, StyledLine } from '../styled';
import { StepContext, useStepperContext } from '../utils';

export const Step = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { currentIndexRef, isHorizontal } = useStepperContext();
    const stepIndexRef = useRef(currentIndexRef.current++);
    const stepContextValue = { currentStepIndex: stepIndexRef.current };

    React.useEffect(() => {
      currentIndexRef.current = 0;
    }, [currentIndexRef]);

    return (
      <StepContext.Provider value={stepContextValue}>
        <StyledStep ref={ref} isHorizontal={isHorizontal} {...props}>
          {stepIndexRef.current > 0 && isHorizontal && <StyledLine />}
          {props.children}
        </StyledStep>
      </StepContext.Provider>
    );
  }
);

Step.displayName = 'Step';
