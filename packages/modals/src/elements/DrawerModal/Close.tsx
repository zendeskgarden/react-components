/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useEffect, forwardRef } from 'react';
import { StyledDrawerModalClose } from '../../styled';
import { useModalContext } from '../../utils/useModalContext';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';

const CloseComponent = forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  (props, ref) => {
    const { getCloseProps, setCloseButtonPresent } = useModalContext();

    useEffect(() => {
      setCloseButtonPresent(true);

      return () => setCloseButtonPresent(false);
    });

    return (
      <StyledDrawerModalClose ref={ref} {...getCloseProps(props)}>
        <XStrokeIcon />
      </StyledDrawerModalClose>
    );
  }
);

CloseComponent.displayName = 'DrawerModal.Close';

/**
 * @extends ButtonHTMLAttributes<HTMLButtonElement>
 */
export const Close = CloseComponent;
