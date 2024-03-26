/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, getColorV8, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledLogoHeaderItem } from './StyledLogoHeaderItem';
import { getNavItemHeight } from '../nav/StyledBaseNavItem';

const COMPONENT_ID = 'chrome.header';

export interface IStyledHeaderProps {
  isStandalone?: boolean;
}

export const getHeaderHeight = (props: ThemeProps<DefaultTheme>) => {
  return getNavItemHeight(props);
};

export const StyledHeader = styled.header.attrs<IStyledHeaderProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledHeaderProps>`
  display: flex;
  position: ${props => props.isStandalone && 'relative'};
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  border-bottom: ${props =>
    `${props.theme.borders.sm} ${getColorV8('neutralHue', 300, props.theme)}`};
  box-shadow: ${props =>
    props.isStandalone &&
    props.theme.shadows.lg('0', '10px', getColorV8('chromeHue', 600, props.theme, 0.15)!)};
  background-color: ${props => getColorV8('background', 600 /* default shade */, props.theme)};
  padding: 0 ${props => props.theme.space.base}px;
  height: ${getHeaderHeight};
  color: ${props => getColorV8('neutralHue', 600, props.theme)};
  font-size: ${props => props.theme.fontSizes.md};

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
