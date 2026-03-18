/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import InfoStrokeIcon from '@zendeskgarden/svg-icons/src/16/info-stroke.svg';
import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import { StyledNotification, StyledIcon } from '../styled';
import { INotificationProps, TYPE } from '../types';
import { validationIcons } from '../utils/icons';
import { Close } from './Close';
import { Paragraph } from './Paragraph';
import { Title } from './Title';

export const NotificationComponent = forwardRef<HTMLDivElement, INotificationProps>(
  ({ children, type, ...props }, ref) => {
    const Icon = type ? validationIcons[type] : InfoStrokeIcon;

    return (
      <StyledNotification ref={ref} $type={type} $isFloating role="alert" {...props}>
        {!!type && (
          <StyledIcon $type={type}>
            <Icon />
          </StyledIcon>
        )}
        {children}
      </StyledNotification>
    );
  }
);

NotificationComponent.displayName = 'Notification';

NotificationComponent.propTypes = {
  type: PropTypes.oneOf(TYPE)
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Notification = NotificationComponent as typeof NotificationComponent & {
  Close: typeof Close;
  Paragraph: typeof Paragraph;
  Title: typeof Title;
};

Notification.Close = Close;
Notification.Paragraph = Paragraph;
Notification.Title = Title;
