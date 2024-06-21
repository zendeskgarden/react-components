/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes, forwardRef } from 'react';
import { StyledTooltipModalClose } from '../../styled';
import { useText } from '@zendeskgarden/react-theming';
import { useTooltipModalContext } from '../../utils/useTooltipModalContext';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';

const CloseComponent = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { getCloseProps } = useTooltipModalContext();

    const ariaLabel = useText(CloseComponent, props, 'aria-label', 'Close tooltip');

    return (
      <StyledTooltipModalClose
        {...(getCloseProps({
          ...props,
          'aria-label': ariaLabel!
        }) as ButtonHTMLAttributes<HTMLButtonElement>)}
        ref={ref}
        size="small"
      >
        <XStrokeIcon />
      </StyledTooltipModalClose>
    );
  }
);

CloseComponent.displayName = 'TooltipModal.Close';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Close = CloseComponent;
