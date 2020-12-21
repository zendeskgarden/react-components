/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { math } from 'polished';
import {
  retrieveComponentStyles,
  getLineHeight,
  DEFAULT_THEME
} from '@zendeskgarden/react-theming';
import { getSubNavItemHeight } from './StyledSubNavItem';

const COMPONENT_ID = 'chrome.subnav_item_text';

export interface IStyledSubNavItemTextProps {
  /**
   * Wraps overflow item text instead of truncating long strings with an ellipsis.
   * Use when `max-width` styling is applied to the subnav container.
   **/
  isWrapped?: boolean;
}

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const baseLineHeight = props.theme.space.base * 5;
  const verticalMargin = math(`(${getSubNavItemHeight(props)} - ${baseLineHeight}) / 2`);
  const lineHeight = getLineHeight(baseLineHeight, props.theme.fontSizes.md);

  return css`
    margin: ${verticalMargin} 0;
    line-height: ${lineHeight};
  `;
};

export const StyledSubNavItemText = styled.span.attrs<IStyledSubNavItemTextProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSubNavItemTextProps>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: ${props => (props.isWrapped ? 'normal' : 'nowrap')};

  ${props => sizeStyles(props)}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSubNavItemText.defaultProps = {
  theme: DEFAULT_THEME
};
