/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import ChromeStyles from '@zendeskgarden/css-chrome';

const COMPONENT_ID = 'chrome.header_item_icon';

/** Applies styling directly to child component */
const HeaderItemIcon = React.forwardRef(({ children }, ref) => {
  return React.cloneElement(Children.only(children), {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': PACKAGE_VERSION,
    ref,
    className: ChromeStyles['c-chrome__body__header__item__icon']
  });
});

HeaderItemIcon.propTypes = { children: PropTypes.node };

/** @component */
export default HeaderItemIcon;
