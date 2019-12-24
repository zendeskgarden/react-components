/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import stripUnit from 'polished/lib/helpers/stripUnit';
import math from 'polished/lib/math/math';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledNavItem } from './StyledNavItem';
import { getNavWidth } from './StyledNav';

const COMPONENT_ID = 'chrome.nav_item_text';

export interface IStyledNavItemTextProps {
  /**
   * Wrap overflow text instead of truncating long strings with an ellipsis
   **/
  isWrapped?: boolean;
  isExpanded?: boolean;
}

export const StyledNavItemText = styled.span.attrs<IStyledNavItemTextProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledNavItemTextProps>`
  position: absolute;
  order: 1;
  clip: rect(1px, 1px, 1px, 1px);
  margin: ${props =>
    props.isExpanded && `0 ${math(`(${getNavWidth(props)} - ${props.theme.iconSizes.lg}) / 4`)}`};
  width: 1px;
  height: 1px;
  overflow: hidden;
  line-height: ${props => (props.theme.space.base * 5) / stripUnit(props.theme.fontSizes.md)};
  white-space: ${props => (props.isWrapped ? 'normal' : 'nowrap')};

  ${props =>
    props.isExpanded &&
    `
    ${StyledNavItem} > & {
      position: static;
      flex: 1;
      clip: auto;
      width: auto;
      height: auto;
      text-overflow: ellipsis;
    }
  `}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledNavItemText.defaultProps = {
  theme: DEFAULT_THEME
};
