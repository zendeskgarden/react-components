/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import styled from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import AlertErrorStrokeIcon from '@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg';
import { useModalContext } from '../utils/useModalContext';
import { StyledHeader, IStyledHeaderProps } from '../styled';

const StyledIcon = styled(AlertErrorStrokeIcon)`
  position: absolute;
  top: ${props => props.theme.space.base * 5.5}px;
  ${props => (props.theme.rtl ? 'right' : 'left')}: ${props => `${props.theme.space.base * 4}px`};
`;

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
