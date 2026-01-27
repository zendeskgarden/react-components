/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getColor, componentStyles } from '@zendeskgarden/react-theming';
import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';

const COMPONENT_ID = 'modals.drawer_modal';

const DRAWER_WIDTH = 380;

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const offsetY = `${theme.space.base * 5}px`;
  const blurRadius = `${theme.space.base * 7}px`;
  const shadowColor = getColor({ variable: 'shadow.large', theme });
  const shadow = theme.shadows.lg(offsetY, blurRadius, shadowColor);

  const borderColor = getColor({ theme, variable: 'border.default' });
  const backgroundColor = getColor({ theme, variable: 'background.raised' });

  return css`
    border-color: ${borderColor};
    box-shadow: ${shadow};
    background-color: ${backgroundColor};
  `;
};

/**
 * 1. Smooth iOS scrolling.
 */
export const StyledDrawer = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  position: fixed;
  top: 0;
  ${props => (props.theme.rtl ? 'left' : 'right')}: 0;
  flex-direction: column;
  z-index: 500;
  ${props => (props.theme.rtl ? 'border-right' : 'border-left')}: ${props =>
    props.theme.borders.sm};
  width: ${DRAWER_WIDTH}px;
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch; /* [1] */
  font-family: ${props => props.theme.fonts.system};
  direction: ${props => props.theme.rtl && 'rtl'};

  &.garden-drawer-transition-enter {
    transform: translateX(${props => (props.theme.rtl ? -DRAWER_WIDTH : DRAWER_WIDTH)}px);
  }

  &.garden-drawer-transition-enter-active {
    transform: translateX(0);
    transition: transform 0.25s ease-in-out;
  }

  &.garden-drawer-transition-exit-active {
    transform: translateX(${props => (props.theme.rtl ? -DRAWER_WIDTH : DRAWER_WIDTH)}px);
    transition: transform 0.25s ease-in-out;
  }

  &:focus {
    outline: none;
  }

  ${colorStyles}

  ${componentStyles};
`;
