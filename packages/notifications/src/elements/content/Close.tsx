/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { ButtonHTMLAttributes } from 'react';
import { StyledClose } from '../../styled';
import { useNotificationsContext } from '../../utils/useNotificationsContext';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/12/x-stroke.svg';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Close = React.forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const hue = useNotificationsContext();

    return (
      <StyledClose ref={ref} hue={hue} {...props}>
        <XStrokeIcon />
      </StyledClose>
    );
  }
);

Close.displayName = 'Close';
