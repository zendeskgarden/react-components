/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { Children, forwardRef } from 'react';
import PropTypes from 'prop-types';
import ClockIcon12 from '@zendeskgarden/svg-icons/src/12/clock-stroke.svg';
import ClockIcon16 from '@zendeskgarden/svg-icons/src/16/clock-stroke.svg';
import ArrowLeftIcon12 from '@zendeskgarden/svg-icons/src/12/arrow-left-sm-stroke.svg';
import ArrowLeftIcon16 from '@zendeskgarden/svg-icons/src/16/arrow-left-sm-stroke.svg';

import { IAvatarProps, SIZE, STATUS } from '../types';
import { StyledAvatar, StyledStatusIndicator } from '../styled';

import { Text } from './components/Text';

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

    let ClockIcon = ClockIcon12;
    let ArrowLeftIcon = ArrowLeftIcon12;

    if (['large', 'medium'].includes(size as string)) {
      ClockIcon = ClockIcon16;
      ArrowLeftIcon = ArrowLeftIcon16;
    }

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
        {Children.only(children)}
        {computedStatus && (
          <StyledStatusIndicator
            size={size}
            status={computedStatus}
            backgroundColor={backgroundColor}
            foregroundColor={foregroundColor}
            surfaceColor={surfaceColor}
          >
            {computedStatus === 'active' ? (
              <span>{badge}</span>
            ) : (
              <>
                {computedStatus === 'away' ? <ClockIcon data-icon-status={computedStatus} /> : null}
                {computedStatus === 'transfers' ? (
                  <ArrowLeftIcon data-icon-status={computedStatus} />
                ) : null}
              </>
            )}
          </StyledStatusIndicator>
        )}
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
