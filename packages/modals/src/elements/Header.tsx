/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { useModalContext } from '../utils/useModalContext';
import { StyledIcon, StyledHeader, IStyledHeaderProps } from '../styled';

/**
 * Accepts all `<div>` props
 */
export const Header = React.forwardRef<
  HTMLDivElement,
  IStyledHeaderProps & React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { getTitleProps } = useModalContext();

  return (
    <StyledHeader ref={ref} {...getTitleProps(props)}>
      {props.isDanger && <StyledIcon />}
      {props.children}
    </StyledHeader>
  );
});

StyledIcon.defaultProps = {
  theme: DEFAULT_THEME
};
