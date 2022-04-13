/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { HUE, ICodeProps, INHERIT_SIZE } from '../types';
import { StyledCode } from '../styled';

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Code = forwardRef<HTMLElement, ICodeProps>(({ size, hue, ...other }, ref) => {
  let _size: 'sm' | 'md' | 'lg' | 'inherit';

  if (size === 'small') {
    _size = 'sm';
  } else if (size === 'medium') {
    _size = 'md';
  } else if (size === 'large') {
    _size = 'lg';
  } else {
    _size = 'inherit';
  }

  return <StyledCode ref={ref} size={_size} hue={hue} {...other} />;
});

Code.displayName = 'Code';

Code.propTypes = {
  hue: PropTypes.oneOf(HUE),
  size: PropTypes.oneOf(INHERIT_SIZE)
};

Code.defaultProps = {
  hue: 'grey',
  size: 'inherit'
};
