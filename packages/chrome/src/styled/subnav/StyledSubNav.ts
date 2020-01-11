/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import readableColor from 'polished/lib/color/readableColor';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledSubNavItem } from './StyledSubNavItem';

const COMPONENT_ID = 'chrome.subnav';

export const getBackgroundColor = (props: IStyledSubNavProps) => {
  return getColor(props.hue || 'chromeHue', 800, props.theme);
};

const colorStyles = (props: IStyledSubNavProps) => {
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

interface IStyledSubNavProps extends ThemeProps<DefaultTheme> {
  hue?: string;
}

export const StyledSubNav = styled.nav.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSubNavProps>`
  flex-direction: column;
  order: 0;
  padding: ${props => `${props.theme.space.base * 6}px ${props.theme.space.base * 5}px`};
  min-width: 220px;
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
