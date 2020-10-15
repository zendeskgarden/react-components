/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StyledDrawerModalClose } from '../../styled';
import { useModalContext } from '../../utils/useModalContext';
import XStrokeIcon from '@zendeskgarden/svg-icons/src/16/x-stroke.svg';

/**
 * Used to close a Drawer. Accepts all `<button>` props.
 */
export const Close = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { getCloseProps } = useModalContext();

  return (
    <StyledDrawerModalClose ref={ref} {...getCloseProps(props)}>
      <XStrokeIcon />
    </StyledDrawerModalClose>
  );
});

Close.displayName = 'DrawerModal.Close';
