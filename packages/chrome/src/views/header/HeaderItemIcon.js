import React, { Children } from 'react';
import ChromeStyles from '@zendesk/garden-css-chrome';

import { version } from '../../../package.json';
const COMPONENT_ID = 'chrome.header_item_icon';

/** Applies styling directly to child component */
const HeaderItemIcon = ({ children }) => {
  return React.cloneElement(Children.only(children), {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': version,
    className: ChromeStyles['c-chrome__body__header__item__icon']
  });
};

/** @component */
export default HeaderItemIcon;
