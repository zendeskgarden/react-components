/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

import { StyledContent, StyledInnerContent } from '../../../styled';
import { useStepContext } from '../../../utils';

const ContentComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { isActive, isHorizontal } = useStepContext();

    return isHorizontal === false ? (
      <StyledContent ref={ref} $isActive={isActive} {...props}>
        <StyledInnerContent aria-hidden={!isActive} inert={isActive ? undefined : ''}>
          {props.children}
        </StyledInnerContent>
      </StyledContent>
    ) : null;
  }
);

ContentComponent.displayName = 'Stepper.Content';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Content = ContentComponent;
