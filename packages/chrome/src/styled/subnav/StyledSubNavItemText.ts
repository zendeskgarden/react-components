/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import math from 'polished/lib/math/math';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import stripUnit from 'polished/lib/helpers/stripUnit';
import { getSubNavItemHeight } from './StyledSubNavItem';

const COMPONENT_ID = 'chrome.subnav_item_text';

export interface IStyledSubNavItemTextProps {
  /**
   * Wrap overflow text instead of truncating long strings with an ellipsis
   * (use in conjunction with max-width styling applied to the `SubNav` container)
   **/
  isWrapped?: boolean;
}

const sizeStyles = (props: ThemeProps<DefaultTheme>) => {
  const baseLineHeight = props.theme.space.base * 5;
  const verticalMargin = math(`(${getSubNavItemHeight(props)} - ${baseLineHeight}) / 2`);
  const lineHeight = baseLineHeight / stripUnit(props.theme.fontSizes.md);

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
