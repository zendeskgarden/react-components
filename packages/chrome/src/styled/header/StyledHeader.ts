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

const COMPONENT_ID = 'chrome.header';

export interface IStyledHeaderProps {
  /** Display logo for standlone usage  */
  isStandalone?: boolean;
}

export const StyledHeader = styled.header.attrs<IStyledHeaderProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__body__header'], {
    [ChromeStyles['c-chrome__body__header--standalone']]: props.isStandalone
  })
}))<IStyledHeaderProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
