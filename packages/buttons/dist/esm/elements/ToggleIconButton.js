/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from './IconButton.js';

const ToggleIconButton = forwardRef((_ref, ref) => {
  let {
    isPressed,
    isPill = true,
    isBasic = true,
    size = 'medium',
    ...otherProps
  } = _ref;
  return React__default.createElement(IconButton, Object.assign({
    "aria-pressed": isPressed,
    isPill: isPill,
    isBasic: isBasic,
    size: size,
    ref: ref
  }, otherProps));
});
ToggleIconButton.displayName = 'ToggleIconButton';
ToggleIconButton.propTypes = {
  ...IconButton.propTypes,
  isPressed: PropTypes.oneOf([true, false, 'mixed'])
};

export { ToggleIconButton };
