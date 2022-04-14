/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ITagProps, SIZE } from '../types';
import { StyledTag } from '../styled';
import { Close } from './Close';
import { Avatar } from './Avatar';

const TagComponent = forwardRef<HTMLDivElement, ITagProps>(({ size, hue, ...otherProps }, ref) => (
  <StyledTag ref={ref} size={size} hue={hue} {...otherProps} />
));

TagComponent.displayName = 'Tag';

TagComponent.propTypes = {
  size: PropTypes.oneOf(SIZE),
  hue: PropTypes.string,
  isPill: PropTypes.bool,
  isRound: PropTypes.bool,
  isRegular: PropTypes.bool
};

TagComponent.defaultProps = {
  size: 'medium'
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Tag = TagComponent as typeof TagComponent & {
  Avatar: typeof Avatar;
  Close: typeof Close;
};

Tag.Avatar = Avatar;
Tag.Close = Close;
