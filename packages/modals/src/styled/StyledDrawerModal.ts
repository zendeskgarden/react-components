/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { getColor, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.drawer_modal';

const DRAWER_WIDTH = 380;

const boxShadow = (props: ThemeProps<DefaultTheme>) => {
  const { theme } = props;
  const { space, shadows } = theme;
  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const color = getColor('neutralHue', 800, theme, 0.35);

  return shadows.lg(offsetY, blurRadius, color as string);
};

/**
 * 1. Smooth iOS scrolling.
 */
export const StyledDrawerModal = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  position: fixed;
  top: 0;
  ${props => (props.theme.rtl ? 'left' : 'right')}: 0;
  flex-direction: column;
  z-index: 500;
  box-shadow: ${boxShadow};
  background: ${props => props.theme.colors.background};
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

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDrawerModal.defaultProps = {
  theme: DEFAULT_THEME
};
