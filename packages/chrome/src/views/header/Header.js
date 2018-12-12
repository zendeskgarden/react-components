/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import ChromeStyles from '@zendeskgarden/css-chrome';

const COMPONENT_ID = 'chrome.header';

/**
 * Accepts all `<header>` props
 */
const Header = styled.header.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__body__header'], {
    [ChromeStyles['c-chrome__body__header--standalone']]: props.standalone
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Header.propTypes = {
  /** Display logo for standlone usage  */
  standalone: PropTypes.bool
};

/** @component */
export default Header;
