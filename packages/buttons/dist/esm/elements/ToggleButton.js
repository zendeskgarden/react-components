/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Button } from './Button.js';

const ToggleButton = forwardRef((_ref, ref) => {
  let {
    isPressed,
    size = 'medium',
    ...otherProps
  } = _ref;
  return React__default.createElement(Button, Object.assign({
    "aria-pressed": isPressed,
    size: size,
    ref: ref
  }, otherProps));
});
ToggleButton.displayName = 'ToggleButton';
ToggleButton.propTypes = {
  ...Button.propTypes,
  isPressed: PropTypes.oneOf([true, false, 'mixed'])
};

export { ToggleButton };
