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

const COMPONENT_ID = 'chrome.nav';

/**
 * Accepts all `<div>` props
 */
const Nav = styled.nav.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__nav'], {
    // State
    [ChromeStyles['c-chrome__nav--expanded']]: props.expanded,

    // Colors
    [ChromeStyles['c-chrome__nav--dark']]: props.dark,
    [ChromeStyles['c-chrome__nav--light']]: props.light
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Nav.propTypes = {
  /** Expand navigation area to include item text */
  expanded: PropTypes.bool,
  /** Apply dark styling */
  dark: PropTypes.bool,
  /** Apply light styling */
  light: PropTypes.bool
};

/** @component */
export default Nav;
