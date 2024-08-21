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
import { validationIcons } from '../utils/icons';
import { Title } from './Title';
import { Paragraph } from './Paragraph';
import { Close } from './Close';

export const NotificationComponent = forwardRef<HTMLDivElement, INotificationProps>(
  ({ children, type, ...props }, ref) => {
    /* eslint-disable-next-line no-useless-assignment */
    const Icon = type ? validationIcons[type] : InfoStrokeIcon;

    return (
      <StyledNotification ref={ref} $type={type} $isFloating role="alert" {...props}>
        {type && (
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
