import React, { Children } from 'react';
import MenuStyles from '@zendeskgarden/css-menus';

import { version } from '../../../../package.json';
const COMPONENT_ID = 'menus.media_figure';

const MediaFigure = ({ children }) => {
  return React.cloneElement(Children.only(children), {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': version,
    className: MenuStyles['c-menu__item--media__figure']
  });
};

/** @component */
export default MediaFigure;
