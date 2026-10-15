/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ButtonHTMLAttributes, forwardRef, useEffect } from 'react';
import XStrokeIcon from 'svg-icons-legacy/src/16/x-stroke.svg';

import { useModalContext } from '../../hooks/modal/useModalContext';
import { useText } from '../../theming/utils/useText';
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
        {...(getCloseProps({
          ...props,
          'aria-label': ariaLabel!
        }) as ButtonHTMLAttributes<HTMLButtonElement>)}
        data-garden-id={COMPONENT_IDS['modals.close']}
        data-garden-version={PACKAGE_VERSION}
        ref={ref}
      >
        <XStrokeIcon />
      </StyledClose>
    );
  }
);

Close.displayName = 'Modal.Close';
