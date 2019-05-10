/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import Icon from './Icon';
import ChevronDownIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

const SIZE = {
  SMALL: 'small',
  LARGE: 'large'
};

/**
 * IconButton with an embedded chevron icon
 */
const ChevronButton = React.forwardRef(({ rotated, ...buttonProps }, ref) => (
  <IconButton pill={false} muted={false} basic={false} ref={ref} {...buttonProps}>
    <Icon rotated={rotated}>
      <ChevronDownIcon />
    </Icon>
  </IconButton>
));

ChevronButton.propTypes = {
  /** Apply danger styling */
  danger: PropTypes.bool,
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.LARGE]),
  /** Applies primary button styling */
  primary: PropTypes.bool,
  /** Applies basic button styling */
  basic: PropTypes.bool,
  /** Applies muted button styling */
  muted: PropTypes.bool,
  /** Applies pill styling */
  pill: PropTypes.bool,
  disabled: PropTypes.bool,
  focused: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  hovered: PropTypes.bool,
  active: PropTypes.bool,
  /** Callback for reference of the native button element */
  buttonRef: PropTypes.func,
  /** Rotates icon 180 degrees */
  rotated: PropTypes.bool
};

export default ChevronButton;
