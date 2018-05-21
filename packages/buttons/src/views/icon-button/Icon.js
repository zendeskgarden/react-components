/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonStyles from '@zendeskgarden/css-buttons';

const COMPONENT_ID = 'buttons.icon';

const Icon = ({ children, rotated }) => {
  return React.cloneElement(Children.only(children), {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': PACKAGE_VERSION,
    className: classNames(ButtonStyles['c-btn__icon'], {
      [ButtonStyles['is-rotated']]: rotated
    })
  });
};

Icon.propTypes = {
  /** Rotates icon 180 degrees */
  rotated: PropTypes.bool
};

/** @component */
export default Icon;
