/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useEffect, HTMLAttributes } from 'react';
import { useCombinedRefs } from '@zendeskgarden/container-utilities';
import { StyledContent, StyledInnerContent } from '../../styled';
import { useStepContext, useStepperContext } from '../../utils';

export const StepContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const contentRef = useCombinedRefs<HTMLDivElement>(ref);
    const { activeIndex, isHorizontal } = useStepperContext();
    const { currentStepIndex } = useStepContext();
    const isActive = currentStepIndex === activeIndex;

    useEffect(() => {
      if (contentRef.current && isHorizontal === false) {
        const child = contentRef.current.children[0] as any;

        child.style.height = `${child.scrollHeight}px`;
      }
    }, [contentRef, isHorizontal]);

    return isHorizontal === false ? (
      <StyledContent ref={contentRef} {...props}>
        <StyledInnerContent isActive={isActive}>{props.children}</StyledInnerContent>
      </StyledContent>
    ) : null;
  }
);

StepContent.displayName = 'StepContent';
