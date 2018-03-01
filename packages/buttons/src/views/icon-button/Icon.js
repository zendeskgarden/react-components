import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonStyles from '@zendesk/garden-css-buttons';

import { version } from '../../../package.json';
const COMPONENT_ID = 'buttons.icon';

const Icon = ({ children, rotated }) => {
  return React.cloneElement(Children.only(children), {
    'data-garden-id': COMPONENT_ID,
    'data-garden-version': version,
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
