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
import { StyledButton } from '../styled/StyledButton.js';
import '../styled/StyledSplitButton.js';
import '../styled/StyledExternalIcon.js';
import '../styled/StyledIcon.js';
import '../styled/StyledIconButton.js';
import { useSplitButtonContext } from '../utils/useSplitButtonContext.js';
import { StartIcon } from './components/StartIcon.js';
import { EndIcon } from './components/EndIcon.js';

const ButtonComponent = forwardRef((_ref, ref) => {
  let {
    focusInset,
    isBasic,
    isDanger,
    isLink,
    isNeutral,
    isPill,
    isPrimary,
    isStretched,
    size = 'medium',
    ...other
  } = _ref;
  const splitButtonFocusInset = useSplitButtonContext();
  return React__default.createElement(StyledButton, Object.assign({}, other, {
    $focusInset: focusInset || splitButtonFocusInset,
    $isBasic: isBasic,
    $isDanger: isDanger,
    $isLink: isLink,
    $isNeutral: isNeutral,
    $isPill: isPill,
    $isPrimary: isPrimary,
    $isStretched: isStretched,
    $isUnderlined: isLink,
    $size: size,
    ref: ref
  }));
});
ButtonComponent.displayName = 'Button';
ButtonComponent.propTypes = {
  focusInset: PropTypes.bool,
  isBasic: PropTypes.bool,
  isDanger: PropTypes.bool,
  isLink: PropTypes.bool,
  isNeutral: PropTypes.bool,
  isPill: PropTypes.bool,
  isPrimary: PropTypes.bool,
  isStretched: PropTypes.bool,
  size: PropTypes.oneOf(SIZE)
};
const Button = ButtonComponent;
Button.EndIcon = EndIcon;
Button.StartIcon = StartIcon;

export { Button };
