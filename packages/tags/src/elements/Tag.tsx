/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledTag, StyledAvatar } from '../styled';
import Close from './Close';

export interface ITagProps extends HTMLAttributes<HTMLDivElement> {
  /** Adjusts font size and padding */
  size?: 'small' | 'medium' | 'large';
  /**
   * Sets the color of the tag. Refer to
   * [PALETTE](/components/palette#palette)
   * for available colors. Accepts any hex value.
   */
  hue?: string;
  /** Applies pill styling */
  isPill?: boolean;
  /** Applies styles to round the tag */
  isRound?: boolean;
  /** Applies regular (non-bold) font weight */
  isRegular?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
const Tag = React.forwardRef<HTMLDivElement, ITagProps>(({ size, hue, ...otherProps }, ref) => (
  <StyledTag ref={ref} size={size} hue={hue} {...otherProps} />
));

Tag.displayName = 'Tag';

Tag.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  hue: PropTypes.string,
  isPill: PropTypes.bool,
  isRound: PropTypes.bool,
  isRegular: PropTypes.bool
};

Tag.defaultProps = {
  size: 'medium'
};

(Tag as any).Avatar = StyledAvatar;
(Tag as any).Close = Close;

export default Tag as React.ForwardRefExoticComponent<
  ITagProps & React.RefAttributes<HTMLDivElement>
> & {
  Avatar: typeof StyledAvatar;
  Close: typeof Close;
};
