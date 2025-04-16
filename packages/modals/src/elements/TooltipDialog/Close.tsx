/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { StyledTooltipDialogClose } from '../../styled';
import { useText } from '@zendeskgarden/react-theming';
import { useTooltipDialogContext } from '../../utils/useTooltipDialogContext';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';

const CloseComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { getCloseProps } = useTooltipDialogContext();

    const ariaLabel = useText(CloseComponent, props, 'aria-label', 'Close tooltip');

    return (
      <StyledTooltipDialogClose
        {...(getCloseProps({
          ...props,
          'aria-label': ariaLabel!
        }) as ButtonHTMLAttributes<HTMLButtonElement>)}
        ref={ref}
        size="small"
      >
        <XStrokeIcon />
      </StyledTooltipDialogClose>
    );
  }
);

CloseComponent.displayName = 'TooltipDialog.Close';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Close = CloseComponent;
