/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import ChromeStyles from '@zendeskgarden/css-chrome';

const COMPONENT_ID = 'chrome.footer';

/**
 * Accepts all `<footer>` props. _Remember to set the_ `hasFooter` _prop on the parent_ `<Body>`.
 */
const Footer = styled.footer.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: ChromeStyles['c-chrome__body__footer']
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

/** @component */
export default Footer;
