/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useTooltipModalContext } from '../../utils/useTooltipModalContext';
import { StyledTooltipModalTitle } from '../../styled';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Title = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { getTitleProps } = useTooltipModalContext();

    return (
      <StyledTooltipModalTitle ref={ref} {...getTitleProps(props)}>
        {props.children}
      </StyledTooltipModalTitle>
    );
  }
);

Title.displayName = 'TooltipModal.Title';
