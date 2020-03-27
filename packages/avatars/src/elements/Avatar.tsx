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
  /** Set the avatar background color */
  backgroundColor?: string;
  /** Set the color for child SVG or `Avatar.Text` components */
  foregroundColor?: string;
  /** Set the color of the surface behind the avatar – used to manipulate the inner status rings */
  surfaceColor?: string;
  /** Applies system styling */
  isSystem?: boolean;
  size?: 'doubleextrasmall' | 'extrasmall' | 'small' | 'medium' | 'large';
  status?: 'available' | 'away';
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
  size: PropTypes.oneOf(['doubleextrasmall', 'extrasmall', 'small', 'medium', 'large']),
  status: PropTypes.oneOf(['available', 'away'])
};

Avatar.defaultProps = {
  size: 'medium'
};

(Avatar as any).Text = StyledText;

/** @component */
export default Avatar as React.FunctionComponent<
  IAvatarProps & React.RefAttributes<HTMLElement>
> & {
  Text: typeof StyledText;
};
