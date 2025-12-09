/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { SIZE } from '../types/index.js';
import { StyledTag } from '../styled/StyledTag.js';
import '../styled/StyledAvatar.js';
import '../styled/StyledClose.js';
import { Close } from './Close.js';
import { Avatar } from './Avatar.js';

const TagComponent = forwardRef((_ref, ref) => {
  let {
    isPill,
    isRound,
    isRegular,
    size = 'medium',
    hue,
    ...other
  } = _ref;
  return React__default.createElement(StyledTag, Object.assign({
    $hue: hue,
    $isPill: isPill,
    $isRegular: isRegular,
    $isRound: isRound,
    $size: size,
    ref: ref
  }, other));
});
TagComponent.displayName = 'Tag';
TagComponent.propTypes = {
  size: PropTypes.oneOf(SIZE),
  hue: PropTypes.string,
  isPill: PropTypes.bool,
  isRound: PropTypes.bool,
  isRegular: PropTypes.bool
};
const Tag = TagComponent;
Tag.Avatar = Avatar;
Tag.Close = Close;

export { Tag };
