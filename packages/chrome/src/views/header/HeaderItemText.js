/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';
import { retrieveTheme } from '@zendeskgarden/react-theming';
import ChromeStyles from '@zendeskgarden/css-chrome';

const COMPONENT_ID = 'chrome.header_item_text';

/**
 * Accepts all `<span>` props
 */
const HeaderItemText = styled.span.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(ChromeStyles['c-chrome__body__header__item__text'], {
    [ChromeStyles['is-clipped']]: props.clipped
  })
}))`
  ${props => retrieveTheme(COMPONENT_ID, props)};
`;

HeaderItemText.propTypes = {
  /** Clip text (but leave accessible to screenreaders) for an icon-only header item */
  clipped: PropTypes.bool
};

/** @component */
export default HeaderItemText;
