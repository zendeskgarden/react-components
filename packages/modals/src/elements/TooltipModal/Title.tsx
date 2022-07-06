/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import { useTooltipModalContext } from '../../utils/useTooltipModalContext';
import { StyledTooltipModalTitle } from '../../styled';

const TitleComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { getTitleProps } = useTooltipModalContext();

  return (
    <StyledTooltipModalTitle
      {...(getTitleProps(props) as HTMLAttributes<HTMLDivElement>)}
      ref={ref}
    >
      {props.children}
    </StyledTooltipModalTitle>
  );
});

TitleComponent.displayName = 'TooltipModal.Title';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Title = TitleComponent;
