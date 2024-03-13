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
import { Title } from './content/Title';
import { Paragraph } from './content/Paragraph';
import { Close } from './content/Close';

export const NotificationComponent = forwardRef<HTMLDivElement, INotificationProps>(
  ({ role, ...props }, ref) => {
    const Icon = props.type ? validationIcons[props.type] : InfoStrokeIcon;
    const hue = props.type && validationHues[props.type];

    return (
      <StyledNotification
        ref={ref}
        type={props.type}
        isFloating
        {...props}
        role={role === undefined ? 'status' : role}
      >
        {props.type && (
          <StyledIcon hue={hue}>
            <Icon />
          </StyledIcon>
        )}

        {props.children}
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
