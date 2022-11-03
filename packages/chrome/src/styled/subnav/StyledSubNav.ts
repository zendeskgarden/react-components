/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledSubNavItem } from './StyledSubNavItem';

const COMPONENT_ID = 'chrome.subnav';

const colorStyles = (props: IStyledSubNavProps) => {
  let shade;

  if (props.isLight) {
    shade = 500;
  } else {
    shade = props.isDark ? 700 : 800;
  }

  const backgroundColor = getColor(props.hue, shade, props.theme);
  const foregroundColor = props.isLight ? props.theme.palette.grey[800] : props.theme.palette.white;

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

interface IStyledSubNavProps extends ThemeProps<DefaultTheme> {
  hue: string;
  isDark?: boolean;
  isLight?: boolean;
}

export const StyledSubNav = styled.nav.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSubNavProps>`
  flex-direction: column;
  order: 0;
  padding: ${props => `${props.theme.space.base * 6}px ${props.theme.space.base * 5}px`};
  min-width: 220px;
  overflow: auto;
  font-size: ${props => props.theme.fontSizes.md};

  ${props => colorStyles(props)};

  & > ${StyledSubNavItem}:first-child {
    margin-top: 0;
  }

  ${props => retrieveComponentStyles('chrome.subnav', props)};
`;

StyledSubNav.defaultProps = {
  theme: DEFAULT_THEME
};
