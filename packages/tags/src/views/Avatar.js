import React, { Children } from 'react';
import classNames from 'classnames';
import TagStyles from '@zendeskgarden/css-tags';

import { version } from '../../package.json';
const COMPONENT_ID = 'tags.avatar';

const Avatar = ({ children, className }) => {
  return React.cloneElement(Children.only(children), {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': version,
    className: classNames(className, TagStyles['c-tag__avatar'])
  });
};

/** @component */
export default Avatar;
