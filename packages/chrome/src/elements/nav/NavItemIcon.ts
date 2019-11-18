/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, HTMLAttributes } from 'react';
import ChromeStyles from '@zendeskgarden/css-chrome';

const COMPONENT_ID = 'chrome.nav_item_icon';

/**
 * Applies styling directly to child component
 **/
export const NavItemIcon = React.forwardRef<any, HTMLAttributes<any>>(({ children }, ref) => {
  return React.cloneElement(Children.only(children as any), {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': PACKAGE_VERSION,
    ref,
    className: ChromeStyles['c-chrome__nav__item__icon']
  });
});
