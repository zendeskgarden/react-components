/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ButtonHTMLAttributes, forwardRef } from 'react';
import XStrokeIcon from 'svg-icons-legacy/src/16/x-stroke.svg';

import { useNotificationsContext } from '../../hooks/notification/useNotificationsContext';
import { useText } from '../../theming/utils/useText';
import { StyledClose } from '../../views/notification/StyledClose';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Close = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const ariaLabel = useText(Close, props, 'aria-label', 'Close');
    const type = useNotificationsContext();

    return (
      <StyledClose
        ref={ref}
        $type={type}
        aria-label={ariaLabel}
        {...props}
        data-garden-id={COMPONENT_IDS['notifications.close']}
        data-garden-version={PACKAGE_VERSION}
        focusInset
        size="small"
      >
        <XStrokeIcon />
      </StyledClose>
    );
  }
);

Close.displayName = 'Alert.Close';
