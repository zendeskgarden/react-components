/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledAvatar, StyledText } from '../styled';

interface IAvatarProps extends HTMLAttributes<HTMLElement> {
  /** Sets the avatar's background color */
  backgroundColor?: string;
  /** Sets the color for the child SVG or `Avatar.Text` components */
  foregroundColor?: string;
  /** Sets the color of the surface behind the avatar, which is used to manipulate the inner status rings */
  surfaceColor?: string;
  /** Applies system styling */
  isSystem?: boolean;
  /** Sets the avatar's size */
  size?: 'extraextrasmall' | 'extrasmall' | 'small' | 'medium' | 'large';
  /** Sets the avatar's status */
  status?: 'available' | 'away';
  /** Sets the badge text */
  badge?: string | number;
}

/**
 * Accepts all `<figure>` attributes and events
 */
const Avatar: React.FunctionComponent<IAvatarProps> = React.forwardRef<HTMLElement, IAvatarProps>(
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
    const computedStatus = badge === undefined ? status : 'active';

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

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string,
  surfaceColor: PropTypes.string,
  isSystem: PropTypes.bool,
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(['extraextrasmall', 'extrasmall', 'small', 'medium', 'large']),
  status: PropTypes.oneOf(['available', 'away'])
};

Avatar.defaultProps = {
  size: 'medium'
};

(Avatar as any).Text = StyledText;

export default Avatar as React.FunctionComponent<
  IAvatarProps & React.RefAttributes<HTMLElement>
> & {
  Text: typeof StyledText;
};
