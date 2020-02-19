/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

import { StyledSubNavItem, IStyledSubNavItemProps } from './StyledSubNavItem';

const COMPONENT_ID = 'chrome.collapsible_sub_nav_item';

export interface IStyledSubNavItemHeaderProps extends IStyledSubNavItemProps {
  isExpanded?: boolean;
}

export const StyledSubNavItemHeader = styled(StyledSubNavItem).attrs<IStyledSubNavItemHeaderProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  'data-garden-header': 'true'
})<IStyledSubNavItemHeaderProps>`
  position: relative;
  /* stylelint-disable-next-line property-no-unknown */
  padding-${props => (props.theme.rtl ? 'left' : 'right')}: ${props =>
  props.theme.space.base * 7}px;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSubNavItemHeader.defaultProps = {
  theme: DEFAULT_THEME
};
