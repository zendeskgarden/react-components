/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import { useModalContext } from '../../utils/useModalContext';
import { StyledDrawerModalHeader } from '../../styled';

const HeaderComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { isCloseButtonPresent, getTitleProps } = useModalContext();

  return (
    <StyledDrawerModalHeader
      ref={ref}
      {...getTitleProps(props)}
      isCloseButtonPresent={isCloseButtonPresent}
    />
  );
});

HeaderComponent.displayName = 'DrawerModal.Header';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Header = HeaderComponent;
