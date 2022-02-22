/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, forwardRef, HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledAvatar } from '../styled';
import { Text } from './components/Text';

export interface IAvatarProps extends HTMLAttributes<HTMLElement> {
  /** Sets the avatar background color */
  backgroundColor?: string;
  /** Sets the color for child SVG or `Avatar.Text` components */
  foregroundColor?: string;
  /** Provides surface color for an avatar placed on a non-white background */
  surfaceColor?: string;
  /** Applies system styling for representing objects, brands, or products */
  isSystem?: boolean;
  /** Specifies the avatar size */
  size?: 'extraextrasmall' | 'extrasmall' | 'small' | 'medium' | 'large';
  /** Applies status styling */
  status?: 'available' | 'away';
  /** Sets the badge text and applies active styling */
  badge?: string | number;
}

const AvatarComponent = forwardRef<HTMLElement, IAvatarProps>(
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

AvatarComponent.displayName = 'Avatar';

AvatarComponent.propTypes = {
  backgroundColor: PropTypes.string,
  foregroundColor: PropTypes.string,
  surfaceColor: PropTypes.string,
  isSystem: PropTypes.bool,
  badge: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(['extraextrasmall', 'extrasmall', 'small', 'medium', 'large']),
  status: PropTypes.oneOf(['available', 'away'])
};

AvatarComponent.defaultProps = {
  size: 'medium'
};

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Avatar = AvatarComponent as typeof AvatarComponent & {
  Text: typeof Text;
};

Avatar.Text = Text;
