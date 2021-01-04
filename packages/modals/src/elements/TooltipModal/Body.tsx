/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import { StyledTooltipModalBody } from '../../styled';
import { useTooltipModalContext } from '../../utils/useTooltipModalContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Body = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { getContentProps } = useTooltipModalContext();

    return <StyledTooltipModalBody ref={ref} {...getContentProps(props)} />;
  }
);

Body.displayName = 'TooltipModal.Body';
