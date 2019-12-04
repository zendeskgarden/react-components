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

const COMPONENT_ID = 'chrome.nav_item_text';

export interface IStyledNavItemTextProps {
  /**
   * Wrap overflow text instead of truncating long strings with an ellipsis
   **/
  isWrapped?: boolean;
}

export const StyledNavItemText = styled.span.attrs<IStyledNavItemTextProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__nav__item__text'], {
    [ChromeStyles['c-chrome__nav__item__text--wrap']]: props.isWrapped
  })
}))<IStyledNavItemTextProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
