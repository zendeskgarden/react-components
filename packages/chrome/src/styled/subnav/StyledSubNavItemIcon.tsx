/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import styled, { ThemeProps } from 'styled-components';
import ChevronDownStrokeIcon from '@zendeskgarden/svg-icons/src/12/chevron-down-stroke.svg';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { IStyledSubNavItemHeaderProps } from './StyledSubNavItemHeader';
import { getSubNavItemHeight } from './StyledSubNavItem';

const COMPONENT_ID = 'chrome.collapsible_sub_nav_item_icon';

/* eslint-disable @typescript-eslint/no-unused-vars */
const FilteredChevronDownStrokeIcon = React.forwardRef<
  SVGElement,
  IStyledSubNavItemHeaderProps & ThemeProps<HTMLAttributes<SVGElement>>
>(({ theme, isExpanded, ...validProps }, ref) => (
  <ChevronDownStrokeIcon ref={ref} {...validProps} />
));
/* eslint-enable @typescript-eslint/no-unused-vars */

FilteredChevronDownStrokeIcon.displayName = 'FilteredChevronDownStrokeIcon';

export const StyledSubNavItemIcon = styled(FilteredChevronDownStrokeIcon)`
  width: ${props => props.theme.iconSizes.sm};
  height: ${props => props.theme.iconSizes.sm};
`;

StyledSubNavItemIcon.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledSubNavItemIconWrapper = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSubNavItemHeaderProps>`
  display: flex;
  position: absolute;
  top: 0;
  right: ${props => (props.theme.rtl ? 'auto' : 0)};
  left: ${props => props.theme.rtl && 0};
  align-items: center;
  justify-content: center;
  width: ${props => props.theme.space.base * 7}px;
  height: ${getSubNavItemHeight};

  ${StyledSubNavItemIcon} {
    transform: ${props => props.isExpanded && `rotate(${props.theme.rtl ? '-' : ''}180deg)`};
    transition: transform 0.25s ease-in-out;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledSubNavItemIconWrapper.defaultProps = {
  theme: DEFAULT_THEME
};
