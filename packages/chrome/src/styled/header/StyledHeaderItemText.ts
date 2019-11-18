/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import classNames from 'classnames';
import styled from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import ChromeStyles from '@zendeskgarden/css-chrome';

const COMPONENT_ID = 'chrome.header_item_text';

export interface IStyledHeaderItemTextProps {
  /**
   * Clip text (but leave accessible to screenreaders) for an icon-only header item
   **/
  isClipped?: boolean;
}

export const StyledHeaderItemText = styled.span.attrs<IStyledHeaderItemTextProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__body__header__item__text'], {
    [ChromeStyles['is-clipped']]: props.isClipped
  })
}))<IStyledHeaderItemTextProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
