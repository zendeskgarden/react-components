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

const COMPONENT_ID = 'chrome.body';

export interface IStyledBodyProps {
  /**
   * Prepare the body content height to allow space for a footer component
   **/
  hasFooter?: boolean;
}

export const StyledBody = styled.div.attrs<IStyledBodyProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__body'], {
    [ChromeStyles['c-chrome__body--footer']]: props.hasFooter
  })
}))<IStyledBodyProps>`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;
