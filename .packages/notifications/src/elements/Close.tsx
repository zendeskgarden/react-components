/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useText } from '@zendeskgarden/react-theming';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import React, { ButtonHTMLAttributes } from 'react';

import { StyledClose } from '../styled';
import { useNotificationsContext } from '../utils/useNotificationsContext';

/**
 * @deprecated use `Alert.Close` or `Notification.Close` instead
 *
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Close = React.forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const ariaLabel = useText(Close, props, 'aria-label', 'Close');
    const type = useNotificationsContext();

    return (
      <StyledClose ref={ref} $type={type} aria-label={ariaLabel} {...props} focusInset size="small">
        <XStrokeIcon />
      </StyledClose>
    );
  }
);

Close.displayName = 'Notification.Close';
