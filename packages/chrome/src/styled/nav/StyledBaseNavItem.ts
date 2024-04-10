/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { math } from 'polished';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { getNavWidth } from './StyledNav';

const COMPONENT_ID = 'chrome.base_nav_item';

export const getNavItemHeight = (props: ThemeProps<DefaultTheme>) => {
  return `${props.theme.space.base * 13}px`;
};

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const verticalPadding = math(`(${getNavItemHeight(props)} - ${props.theme.iconSizes.lg}) / 2`);
  const horizontalPadding = math(`(${getNavWidth(props)} - ${props.theme.iconSizes.lg}) / 4`);

  return css`
    padding: ${verticalPadding} ${horizontalPadding};
    min-height: ${getNavItemHeight};
  `;
};

export const StyledBaseNavItem = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  /* prettier-ignore */
  transition:
    outline-color 0.1s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.1s ease-in-out,
    opacity 0.1s ease-in-out;

  ${props => sizeStyles(props)}
`;

StyledBaseNavItem.defaultProps = {
  theme: DEFAULT_THEME
};
