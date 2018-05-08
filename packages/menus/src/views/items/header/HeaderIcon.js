import React, { Children } from 'react';
import MenuStyles from '@zendeskgarden/css-menus';

import { version } from '../../../../package.json';
const COMPONENT_ID = 'menus.header_icon';

const HeaderIcon = ({ children }) => {
  return React.cloneElement(Children.only(children), {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': version,
    className: MenuStyles['c-menu__item--header__icon']
  });
};

/** @component */
export default HeaderIcon;
