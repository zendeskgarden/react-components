/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import ChromeStyles from '@zendeskgarden/css-chrome';

import { version } from '../../../package.json';
const COMPONENT_ID = 'chrome.subnav';

/**
 * Accepts all `<div>` props
 */
const SubNav = styled.nav.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': version,
  className: ChromeStyles['c-chrome__subnav']
})`
  ${props => retrieveTheme('chrome.subnav', props)};
`;

/** @component */
export default SubNav;
