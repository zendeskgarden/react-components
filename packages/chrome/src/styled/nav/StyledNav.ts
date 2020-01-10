/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import readableColor from 'polished/lib/color/readableColor';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.nav';

interface IStyledNavProps extends ThemeProps<DefaultTheme> {
  isExpanded?: boolean;
  hue?: string;
}

export const getBackgroundColor = (props: IStyledNavProps) => {
  return getColor(props.hue || 'chromeHue', 700, props.theme);
};

export const getNavWidth = (props: IStyledNavProps) => {
  return `${props.theme.space.base * 15}px`;
};

export const getExpandedNavWidth = () => {
  return `200px`;
};

const colorStyles = (props: IStyledNavProps) => {
  const backgroundColor = getBackgroundColor(props);
  const foregroundColor = readableColor(
    backgroundColor!,
    props.theme.colors.foreground,
    props.theme.colors.background
  );

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

export const StyledNav = styled.nav.attrs<IStyledNavProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledNavProps>`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-shrink: 0;
  order: -1;
  width: ${props => (props.isExpanded ? getExpandedNavWidth : getNavWidth)};
  font-size: ${props => props.theme.fontSizes.md};

  ${props => colorStyles(props)};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNav.defaultProps = {
  theme: DEFAULT_THEME
};
