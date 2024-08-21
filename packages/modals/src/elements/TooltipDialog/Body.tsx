/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import { StyledTooltipDialogBody } from '../../styled';
import { useTooltipDialogContext } from '../../utils/useTooltipDialogContext';

const BodyComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { getContentProps } = useTooltipDialogContext();

  return (
    <StyledTooltipDialogBody
      {...(getContentProps(props) as HTMLAttributes<HTMLDivElement>)}
      ref={ref}
    />
  );
});

BodyComponent.displayName = 'TooltipDialog.Body';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Body = BodyComponent;
