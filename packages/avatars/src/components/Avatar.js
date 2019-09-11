/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children } from 'react';
import PropTypes from 'prop-types';
import { StyledAvatar, StyledText } from '../styled';

const SIZE = {
  EXTRASMALL: 'extrasmall',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large'
};

const STATUS = {
  AVAILABLE: 'available',
  ACTIVE: 'active',
  AWAY: 'away'
};

/**
 * Accepts all `<figure>` attributes and events
 */
const Avatar = React.forwardRef(
  (
    {
      isSystem,
      size,
      status,
      children,
      badge,
      surfaceColor,
      backgroundColor,
      foregroundColor,
      ...other
    },
    ref
  ) => {
    const computedStatus = badge === undefined ? status : STATUS.ACTIVE;

    return (
      <StyledAvatar
        ref={ref}
        isSystem={isSystem}
        size={size}
        status={computedStatus}
        data-badge={badge}
        surfaceColor={surfaceColor}
        backgroundColor={backgroundColor}
        foregroundColor={foregroundColor}
        aria-atomic="true"
        aria-live="polite"
        {...other}
      >
        {Children.only(children)}
      </StyledAvatar>
    );
  }
);

Avatar.propTypes = {
  /** Set the avatar background color */
  backgroundColor: PropTypes.string,
  /** Set the color for child SVG or `Avatar.Text` components */
  foregroundColor: PropTypes.string,
  /** Set the color of the surface behind the avatar – used to manipulate the inner status rings */
  surfaceColor: PropTypes.string,
  /** Applies system styling */
  isSystem: PropTypes.bool,
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf([SIZE.EXTRASMALL, SIZE.SMALL, SIZE.MEDIUM, SIZE.LARGE]),
  status: PropTypes.oneOf([STATUS.AVAILABLE, STATUS.AWAY]),
  children: PropTypes.node
};

Avatar.defaultProps = {
  size: SIZE.MEDIUM
};

Avatar.Text = StyledText;

/** @component */
export default Avatar;
