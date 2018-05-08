/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveTheme } from '@zendesk/garden-react-theming';
import ChromeStyles from '@zendeskgarden/css-chrome';

import { version } from '../../../package.json';
const COMPONENT_ID = 'chrome.subnav_item_text';

/**
 * Accepts all `<span>` props
 */
const SubNavItemText = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: ChromeStyles['c-chrome__subnav__item__text']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default SubNavItemText;
