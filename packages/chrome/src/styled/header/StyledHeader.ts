/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, getColor, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledLogoHeaderItem } from './StyledLogoHeaderItem';
import { getNavItemHeight } from '../nav/StyledBaseNavItem';

const COMPONENT_ID = 'chrome.header';

export interface IStyledHeaderProps extends ThemeProps<DefaultTheme> {
  isStandalone?: boolean;
}

const colorStyles = (props: IStyledHeaderProps) => {
  const backgroundColor = props.theme.colors.background;
  const borderColor = getColor(
    'neutralHue',
    props.theme.colors.base === 'dark' ? 700 : 300,
    props.theme
  );
  const boxShadow = props.theme.shadows.lg(
    '0',
    `${props.theme.space.base * 2.5}px`,
    getColor('chromeHue', 600, props.theme, 0.15)!
  );
  const foregroundColor = getColor('neutralHue', 600, props.theme);

  return css`
    border-bottom-color: ${borderColor};
    box-shadow: ${props.isStandalone && boxShadow};
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

const sizeStyles = (props: IStyledHeaderProps) => {
  const border = props.theme.borders.sm;
  const fontSize = props.theme.fontSizes.md;
  const height = getNavItemHeight(props);
  const padding = `${props.theme.space.base}px`;

  return css`
    border-bottom: ${border};
    padding: 0 ${padding};
    height: ${height};
    font-size: ${fontSize};
  `;
};

export { getNavItemHeight as getHeaderHeight };

export const StyledHeader = styled.header.attrs<IStyledHeaderProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeaderProps>`
  display: flex;
  position: ${props => props.isStandalone && 'relative'};
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;

  ${sizeStyles};
  ${colorStyles};

  ${props =>
    props.isStandalone &&
    `
    ${StyledLogoHeaderItem} {
      display: inline-flex;
    }
  `}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledHeader.defaultProps = {
  theme: DEFAULT_THEME
};
