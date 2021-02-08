/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, LiHTMLAttributes, useEffect, useRef, useState } from 'react';
import { StyledStep, StyledLine } from '../../../styled';
import { StepContext, useStepperContext } from '../../../utils';

const useStep = () => {
  const { currentIndexRef, ...context } = useStepperContext();
  const [index, setIndex] = useState(currentIndexRef.current);
  const isMounted = useRef(true);

  useEffect(
    () => () => {
      isMounted.current = false;
    },
    []
  );

  useEffect(() => {
    setIndex(currentIndexRef.current);
    currentIndexRef.current++;
    const currentIndex = currentIndexRef;

    return () => {
      currentIndex.current--;
      if (isMounted.current) {
        setIndex(currentIndex.current);
      }
    };
  }, [currentIndexRef]);

  return [index, context] as const;
};

export const Step = forwardRef<HTMLLIElement, LiHTMLAttributes<HTMLLIElement>>((props, ref) => {
  const [currentStepIndex, context] = useStep();

  return (
    <StepContext.Provider value={{ currentStepIndex }}>
      <StyledStep ref={ref} isHorizontal={context.isHorizontal} {...props}>
        {context.isHorizontal && <StyledLine data-test-id="step-line" />}
        {props.children}
      </StyledStep>
    </StepContext.Provider>
  );
});

Step.displayName = 'Step';
