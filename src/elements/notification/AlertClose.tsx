/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import XSmallIcon from '@zendeskgarden/svg-icons/src/x-small.svg';
import { ButtonHTMLAttributes, forwardRef } from 'react';

import { useText } from '../../theming/utils/useText';
import { StyledIcon } from '../../views/button/StyledIcon';
import { StyledClose } from '../../views/notification/StyledClose';
import { COMPONENT_IDS } from '../utils';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Close = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const ariaLabel = useText(Close, props, 'aria-label', 'Close');

    return (
      <StyledClose
        ref={ref}
        type="button"
        aria-label={ariaLabel}
        {...props}
        $focusInset
        $isBasic
        $isPill
        $size="small"
        data-garden-id={COMPONENT_IDS['notifications.close']}
        data-garden-version={PACKAGE_VERSION}
      >
        <StyledIcon
          data-garden-id={COMPONENT_IDS['buttons.icon']}
          data-garden-version={PACKAGE_VERSION}
        >
          <XSmallIcon />
        </StyledIcon>
      </StyledClose>
    );
  }
);

Close.displayName = 'Alert.Close';
