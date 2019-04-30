/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children } from 'react';
import MenuStyles from '@zendeskgarden/css-menus';

const COMPONENT_ID = 'dropdowns.media_figure';

const StyledMediaFigure = ({ children }) => {
  return React.cloneElement(Children.only(children), {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': PACKAGE_VERSION,
    className: MenuStyles['c-menu__item--media__figure']
  });
};

/** @component */
export default StyledMediaFigure;
