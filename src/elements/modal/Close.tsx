/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import XIcon from '@zendeskgarden/svg-icons/src/x.svg';
import { ButtonHTMLAttributes, forwardRef, useEffect } from 'react';

import { useModalContext } from '../../hooks/modal/useModalContext';
import { useText } from '../../theming/utils/useText';
import { StyledIcon } from '../../views/button/StyledIcon';
import { StyledClose } from '../../views/modal/StyledClose';
import { COMPONENT_IDS } from '../utils';

/**
 * @deprecated use `Modal.Close` instead
 *
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Close = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { getCloseProps, setIsCloseButtonPresent } = useModalContext();

    useEffect(() => {
      setIsCloseButtonPresent(true);

      return () => setIsCloseButtonPresent(false);
    });

    const ariaLabel = useText(
      Close,
      props,
      'aria-label',
      'Close modal',
      props['aria-describedby'] === undefined /* has tooltip */
    );

    return (
      <StyledClose
        type="button"
        {...(getCloseProps({
          ...props,
          'aria-label': ariaLabel!
        }) as ButtonHTMLAttributes<HTMLButtonElement>)}
        $isBasic
        $isPill
        $size="medium"
        data-garden-id={COMPONENT_IDS['modals.close']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      >
        <StyledIcon
          data-garden-id={COMPONENT_IDS['buttons.icon']}
          data-garden-version={PACKAGE_VERSION}
        >
          <XIcon />
        </StyledIcon>
      </StyledClose>
    );
  }
);

Close.displayName = 'Modal.Close';
