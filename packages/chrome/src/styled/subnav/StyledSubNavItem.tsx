/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import ChromeStyles from '@zendeskgarden/css-chrome';

const COMPONENT_ID = 'chrome.subnav_item';

export interface IStyledSubNavItemProps {
  /**
   * Indicate which item is current in the nav
   **/
  isCurrent?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
}

export const StyledSubNavItem = styled.button.attrs<IStyledSubNavItemProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__subnav__item'], {
    // State
    [ChromeStyles['is-current']]: props.isCurrent,
    [ChromeStyles['is-hovered']]: props.isHovered,
    [ChromeStyles['is-focused']]: props.isFocused
  })
}))<IStyledSubNavItemProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
