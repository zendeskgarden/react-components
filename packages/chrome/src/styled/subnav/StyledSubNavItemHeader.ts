/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import ChromeStyles from '@zendeskgarden/css-chrome';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';

import { StyledSubNavItem, IStyledSubNavItemProps } from '../../styled';

const COMPONENT_ID = 'chrome.collapsible_sub_nav_item';

export interface IStyledSubNavItemHeader extends IStyledSubNavItemProps {
  isExpanded?: boolean;
}

export const StyledSubNavItemHeader = styled(StyledSubNavItem).attrs<IStyledSubNavItemHeader>(
  props => ({
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': PACKAGE_VERSION,
    className: classNames(props.className, ChromeStyles['c-chrome__subnav__item--header'], {
      [ChromeStyles['is-expanded']]: props.isExpanded
    })
  })
)<IStyledSubNavItemHeader>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
