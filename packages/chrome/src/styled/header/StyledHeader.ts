/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledLogoHeaderItem } from './StyledLogoHeaderItem';
import { getHeaderHeight } from '../utils';

const COMPONENT_ID = 'chrome.header';

export interface IStyledHeaderProps {
  $isStandalone?: boolean;
}

const colorStyles = ({ theme, $isStandalone }: IStyledHeaderProps & ThemeProps<DefaultTheme>) => {
  const backgroundColor = getColor({ theme, variable: 'background.default' });
  const borderColor = getColor({ theme, variable: 'border.default' });
  const boxShadowColor = getColor({ variable: 'shadow.small', theme });
  const boxShadow = $isStandalone
    ? theme.shadows.lg('0', `${theme.space.base * 2}px`, boxShadowColor)
    : undefined;
  const foregroundColor = getColor({ theme, variable: 'foreground.subtle' });

  return css`
    border-bottom-color: ${borderColor};
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

const sizeStyles = ({ theme }: IStyledHeaderProps & ThemeProps<DefaultTheme>) => {
  const border = theme.borders.sm;
  const padding = `0 ${theme.space.base}px`;
  const fontSize = theme.fontSizes.md;
  const height = getHeaderHeight(theme);

  return css`
    box-sizing: border-box;
    border-bottom: ${border};
    padding: ${padding};
    height: ${height};
    font-size: ${fontSize};
  `;
};

export const StyledHeader = styled.header.attrs<IStyledHeaderProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeaderProps>`
  display: flex;
  position: ${props => props.$isStandalone && 'relative'};
  align-items: center;
  justify-content: flex-end;

  ${sizeStyles};

  ${colorStyles};

  ${StyledLogoHeaderItem} {
    display: ${props => props.$isStandalone && 'inline-flex'};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
