/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import { StyledClose } from '../../styled';
import { useNotificationsContext } from '../../utils/useNotificationsContext';
import { useText } from '@zendeskgarden/react-theming';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/12/x-stroke.svg';

/**
 * @deprecated use `Alert.Close` or `Notification.Close` instead
 *
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Close = React.forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const ariaLabel = useText(Close, props, 'aria-label', 'Close');
    const hue = useNotificationsContext();

    return (
      <StyledClose ref={ref} hue={hue} aria-label={ariaLabel} {...props}>
        <XStrokeIcon />
      </StyledClose>
    );
  }
);

Close.displayName = 'Close';
