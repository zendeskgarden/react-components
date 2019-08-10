/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import IconButton from './IconButton';
import ChevronDownIcon from '@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

/**
 * An `IconButton` with an embedded chevron icon
 */
const ChevronButton = React.forwardRef(({ ...buttonProps }, ref) => (
  <IconButton ref={ref} {...buttonProps}>
    <ChevronDownIcon />
  </IconButton>
));

ChevronButton.propTypes = {
  /** Apply danger styling */
  danger: PropTypes.bool,
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  /** Applies primary button styling */
  primary: PropTypes.bool,
  /** Applies basic button styling */
  basic: PropTypes.bool,
  /** Applies pill styling */
  pill: PropTypes.bool,
  /** Applies inset `box-shadow` styling on focus */
  focusInset: PropTypes.bool,
  /** Rotates icon 180 degrees */
  rotated: PropTypes.bool
};

ChevronButton.defaultProps = {
  basic: false,
  pill: false,
  size: SIZE.MEDIUM
};

export default ChevronButton;
