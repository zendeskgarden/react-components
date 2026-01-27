/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useText } from '@zendeskgarden/react-theming';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';
import React, { ButtonHTMLAttributes, forwardRef, useEffect } from 'react';

import { StyledClose } from '../styled';
import { useModalContext } from '../utils/useModalContext';

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
        ref={ref}
      >
        <XStrokeIcon />
      </StyledClose>
    );
  }
);

Close.displayName = 'Modal.Close';
