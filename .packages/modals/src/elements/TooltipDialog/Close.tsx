/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useText } from '@zendeskgarden/react-theming';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import React, { ButtonHTMLAttributes, forwardRef } from 'react';

import { StyledTooltipDialogClose } from '../../styled';
import { useTooltipDialogContext } from '../../utils/useTooltipDialogContext';

const CloseComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { getCloseProps } = useTooltipDialogContext();

    const ariaLabel = useText(
      CloseComponent,
      props,
      'aria-label',
      'Close tooltip',
      props['aria-describedby'] === undefined /* has tooltip */
    );

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
