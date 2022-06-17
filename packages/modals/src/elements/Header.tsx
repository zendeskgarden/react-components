/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, forwardRef } from 'react';
import { useModalContext } from '../utils/useModalContext';
import { StyledDangerIcon, StyledHeader } from '../styled';
import { IHeaderProps } from '../types';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Header = forwardRef<HTMLDivElement, IHeaderProps>((props, ref) => {
  const { isCloseButtonPresent, getTitleProps } = useModalContext();

  return (
    <StyledHeader
      {...(getTitleProps(props) as HTMLAttributes<HTMLDivElement>)}
      isCloseButtonPresent={isCloseButtonPresent}
      ref={ref}
    >
      {props.isDanger && <StyledDangerIcon />}
      {props.children}
    </StyledHeader>
  );
});

Header.displayName = 'Header';
