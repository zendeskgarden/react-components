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

const COMPONENT_ID = 'chrome.nav';

export interface IStyledNavProps {
  /**
   * Expand navigation area to include item text
   **/
  isExpanded?: boolean;
  /**
   * Apply dark styling
   **/
  isDark?: boolean;
  /**
   * Apply light styling
   **/
  isLight?: boolean;
}

export const StyledNav = styled.nav.attrs<IStyledNavProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__nav'], {
    // State
    [ChromeStyles['c-chrome__nav--expanded']]: props.isExpanded,

    // Colors
    [ChromeStyles['c-chrome__nav--dark']]: props.isDark,
    [ChromeStyles['c-chrome__nav--light']]: props.isLight
  })
}))<IStyledNavProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
