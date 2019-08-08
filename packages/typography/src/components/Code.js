/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledCode } from '../styled';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const HUE = {
  GREY: 'grey',
  RED: 'red',
  GREEN: 'green',
  YELLOW: 'yellow'
};

/**
 * Accepts all `code` props
 */
const Code = ({ size, ...other }) => {
  let _size;

  if (size === SIZE.SMALL) {
    _size = 'sm';
  } else if (size === SIZE.MEDIUM) {
    _size = 'md';
  } else if (size === SIZE.LARGE) {
    _size = 'lg';
  }

  return <StyledCode size={_size} {...other} />;
};

Code.propTypes = {
  hue: PropTypes.oneOf([HUE.GREY, HUE.RED, HUE.GREEN, HUE.YELLOW]),
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE])
};

Code.defaultProps = {
  hue: HUE.GREY,
  size: SIZE.MEDIUM
};

/** @component */
export default Code;
