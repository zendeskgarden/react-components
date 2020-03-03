/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useEffect, HTMLAttributes } from 'react';
import { Transition } from 'react-transition-group';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import { StyledStepContent } from '../../styled';
import { useStepContext, useStepperContext } from '../../utils';

export const StepContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const contentRef = useCombinedRefs<HTMLDivElement>(ref);
    const { activeIndex, isHorizontal } = useStepperContext();
    const { currentStepIndex } = useStepContext();
    const isActive = currentStepIndex === activeIndex;
    const isVertical = isHorizontal === false;

    useEffect(() => {
      if (isActive && contentRef.current) {
        contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`;
      }
    }, [isActive, contentRef]);

    return isVertical ? (
      <Transition in={isActive} timeout={500}>
        {status => (
          <StyledStepContent
            ref={contentRef}
            isActive={isActive}
            transitionStatus={status}
            {...props}
          >
            {isActive ? props.children : <div>{props.children}</div>}
          </StyledStepContent>
        )}
      </Transition>
    ) : null;
  }
);

StepContent.displayName = 'StepContent';
