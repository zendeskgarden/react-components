/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import { IconButton } from './IconButton.js';
import SvgChevronDownStroke from '../node_modules/@zendeskgarden/svg-icons/src/16/chevron-down-stroke.svg.js';

const ChevronButton = forwardRef(({
  isBasic = false,
  isPill = false,
  size = 'medium',
  ...props
}, ref) => React__default.createElement(IconButton, Object.assign({
  ref: ref,
  isBasic: isBasic,
  isPill: isPill,
  size: size
}, props), React__default.createElement(SvgChevronDownStroke, null)));
ChevronButton.displayName = 'ChevronButton';
ChevronButton.propTypes = IconButton.propTypes;

export { ChevronButton };
