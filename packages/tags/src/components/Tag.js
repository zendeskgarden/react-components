/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledTag, StyledAvatar } from '../styled';
import Close from './Close';

const SIZE = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const HUE = {
  GREY: 'grey',
  BLUE: 'blue',
  KALE: 'kale',
  RED: 'red',
  GREEN: 'green',
  YELLOW: 'yellow',
  FUSCHIA: 'fuschia',
  PINK: 'pink',
  CRIMSON: 'crimson',
  ORANGE: 'orange',
  LEMON: 'lemon',
  LIME: 'lime',
  MINT: 'mint',
  TEAL: 'teal',
  AZURE: 'azure',
  ROYAL: 'royal',
  PURPLE: 'purple'
};

/**
 * Accepts all `<div>` props
 */
const Tag = React.forwardRef(({ ...props }, ref) => <StyledTag ref={ref} {...props} />);

Tag.propTypes = {
  size: PropTypes.oneOf([SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  hue: PropTypes.oneOf([
    HUE.GREY,
    HUE.BLUE,
    HUE.KALE,
    HUE.RED,
    HUE.GREEN,
    HUE.YELLOW,
    HUE.FUSCHIA,
    HUE.PINK,
    HUE.CRIMSON,
    HUE.ORANGE,
    HUE.LEMON,
    HUE.LIME,
    HUE.MINT,
    HUE.TEAL,
    HUE.AZURE,
    HUE.ROYAL,
    HUE.PURPLE
  ]),
  pill: PropTypes.bool,
  round: PropTypes.bool,
  focused: PropTypes.bool
};

Tag.defaultProps = {
  size: SIZE.MEDIUM
};

Tag.Avatar = StyledAvatar;
Tag.Close = Close;

/** @component */
export default Tag;
