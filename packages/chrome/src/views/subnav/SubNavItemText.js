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

const COMPONENT_ID = 'chrome.subnav_item_text';

/**
 * Accepts all `<span>` props
 */
const SubNavItemText = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props =>
    classNames(ChromeStyles['c-chrome__subnav__item__text'], {
      [ChromeStyles['c-chrome__subnav__item__text--wrap']]: props.wrap
    })
})`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

SubNavItemText.propTypes = {
  /** Wrap overflow text instead of truncating long strings with an ellipsis
   (use in conjunction with max-width styling applied to the `SubNav` container) */
  wrap: PropTypes.bool
};

/** @component */
export default SubNavItemText;
