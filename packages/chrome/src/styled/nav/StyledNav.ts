/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { retrieveComponentStyles, getColor } from '@zendeskgarden/react-theming';
import { getNavWidth, getNavWidthExpanded } from '../utils';

const COMPONENT_ID = 'chrome.nav';

interface IStyledNavProps {
  $hue: string;
  $isExpanded?: boolean;
}

const colorStyles = ({ theme, $hue }: IStyledNavProps & ThemeProps<DefaultTheme>) => {
  const shade = $hue === 'chromeHue' ? 900 : undefined;
  const backgroundColor = getColor({ theme, hue: $hue, shade });
  const foregroundColor = getColor({ theme, dark: { hue: 'white' }, light: { hue: 'black' } });

  return css`
    background-color: ${backgroundColor};
    color: ${foregroundColor};
  `;
};

const sizeStyles = ({ theme, $isExpanded }: IStyledNavProps & ThemeProps<DefaultTheme>) => {
  const fontSize = theme.fontSizes.md;
  const width = $isExpanded ? getNavWidthExpanded() : getNavWidth(theme);

  return css`
    width: ${width};
    font-size: ${fontSize};
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

  ${colorStyles};

  ${sizeStyles};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
