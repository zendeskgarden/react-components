/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { StyledHeader, IStyledHeaderProps } from '../styled';
import { useModalContext } from '../utils/useModalContext';

/**
 * Accepts all `<div>` props
 */
export const Header = React.forwardRef<
  HTMLDivElement,
  IStyledHeaderProps & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { getTitleProps } = useModalContext();

  return <StyledHeader ref={ref} {...getTitleProps(props)} />;
});
