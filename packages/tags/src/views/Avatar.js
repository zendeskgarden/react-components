/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children } from 'react';
import classNames from 'classnames';
import TagStyles from '@zendeskgarden/css-tags';

const COMPONENT_ID = 'tags.avatar';

const Avatar = ({ children, className }) => {
  return React.cloneElement(Children.only(children), {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': PACKAGE_VERSION,
    className: classNames(className, TagStyles['c-tag__avatar'])
  });
};

/** @component */
export default Avatar;
