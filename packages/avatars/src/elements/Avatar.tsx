/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, forwardRef, useMemo } from 'react';
import PropTypes from 'prop-types';

import { IAvatarProps, SIZE, STATUS } from '../types';
import { AvatarContext } from '../utils';
import { StyledAvatar } from '../styled';

import { Text } from './components/Text';
import { Badge } from './components/Badge';
import { StatusIndicator } from './components/StatusIndicator';

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
    const computedStatus = ['string', 'number'].includes(typeof badge) ? 'active' : status;

    return (
      <StyledAvatar
        ref={ref}
        isSystem={isSystem}
        size={size}
        status={computedStatus}
        surfaceColor={surfaceColor}
        backgroundColor={backgroundColor}
        foregroundColor={foregroundColor}
        aria-atomic="true"
        aria-live="polite"
        {...other}
      >
        <AvatarContext.Provider
          value={
            // use of memo hook directly as value
            useMemo(
              () => ({
                size,
                status: computedStatus,
                surfaceColor,
                backgroundColor,
                foregroundColor
              }),
              [surfaceColor, backgroundColor, foregroundColor, size, computedStatus]
            )
          }
        >
          {Children.only(children)}
          {badge !== undefined && badge !== null && (
            <Badge>
              <StatusIndicator>{badge}</StatusIndicator>
            </Badge>
          )}
        </AvatarContext.Provider>
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
  badge: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.element
  ]),
  size: PropTypes.oneOf(SIZE),
  status: PropTypes.oneOf(STATUS)
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
