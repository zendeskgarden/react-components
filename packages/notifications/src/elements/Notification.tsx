/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import InfoStrokeIcon from '@zendeskgarden/svg-icons/src/16/info-stroke.svg';
import { INotificationProps, TYPE } from '../types';
import { StyledNotification, StyledIcon } from '../styled';
import { validationIcons, validationHues } from '../utils/icons';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Notification = forwardRef<HTMLDivElement, INotificationProps>(
  ({ children, type, ...props }, ref) => {
    const Icon = type ? validationIcons[type] : InfoStrokeIcon;
    const hue = type && validationHues[type];

    return (
      <StyledNotification ref={ref} type={type} isFloating role="alert" {...props}>
        {type && (
          <StyledIcon hue={hue}>
            <Icon />
          </StyledIcon>
        )}

        {children}
      </StyledNotification>
    );
  }
);

Notification.displayName = 'Notification';

Notification.propTypes = {
  type: PropTypes.oneOf(TYPE)
};
