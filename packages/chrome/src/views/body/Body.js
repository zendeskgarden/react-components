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

const COMPONENT_ID = 'chrome.body';

/**
 * Accepts all `<div>` props
 */
const Body = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__body'], {
    [ChromeStyles['c-chrome__body--footer']]: props.hasFooter
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

Body.propTypes = {
  /** Prepare the body content height to allow space for a footer component  */
  hasFooter: PropTypes.bool
};

/** @component */
export default Body;
