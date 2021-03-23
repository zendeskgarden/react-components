/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes, useEffect, useMemo, useState } from 'react';
import { StyledStep, StyledLine } from '../../../styled';
import { StepContext, useStepperContext } from '../../../utils';

export const Step = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>((props, ref) => {
  const { currentIndexRef, isHorizontal } = useStepperContext();
  const [currentStepIndex, setIndex] = useState(currentIndexRef.current);

  useEffect(() => {
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

Step.displayName = 'Step';
