/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledStepContent } from '../../styled';
import { useStepContext, useStepperContext } from '../../utils';

/**
 * Supports all `<div>` props
 */
export const StepContent = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const stepperContext = useStepperContext();
    const { isHorizontal } = stepperContext;
    const { currentStepIndex } = useStepContext();
    const activeIndexContent = currentStepIndex === stepperContext.activeIndex;

    return isHorizontal === false ? (
      <StyledStepContent ref={ref} {...props}>
        {activeIndexContent && props.children}
      </StyledStepContent>
    ) : null;
  }
);

StepContent.displayName = 'StepContent';
