/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { SIZE } from '../types/index.js';
import '../styled/StyledAnchor.js';
import '../styled/StyledButton.js';
import '../styled/StyledSplitButton.js';
import '../styled/StyledExternalIcon.js';
import { StyledIcon } from '../styled/StyledIcon.js';
import { StyledIconButton } from '../styled/StyledIconButton.js';
import { useSplitButtonContext } from '../utils/useSplitButtonContext.js';

const IconButton = forwardRef(({
  children,
  focusInset,
  isBasic = true,
  isDanger,
  isNeutral,
  isPill = true,
  isPrimary,
  isRotated,
  size = 'medium',
  ...other
}, ref) => {
  const splitButtonFocusInset = useSplitButtonContext();
  return React__default.createElement(StyledIconButton, Object.assign({}, other, {
    $isBasic: isBasic,
    $isDanger: isDanger,
    $isNeutral: isNeutral,
    $isPill: isPill,
    $isPrimary: isPrimary,
    $size: size,
    $focusInset: focusInset || splitButtonFocusInset,
    ref: ref
  }), React__default.createElement(StyledIcon, {
    $isRotated: isRotated
  }, children));
});
IconButton.displayName = 'IconButton';
IconButton.propTypes = {
  focusInset: PropTypes.bool,
  isBasic: PropTypes.bool,
  isDanger: PropTypes.bool,
  isNeutral: PropTypes.bool,
  isPill: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isRotated: PropTypes.bool,
  size: PropTypes.oneOf(SIZE)
};

export { IconButton };
