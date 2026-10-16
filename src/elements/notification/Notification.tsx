/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import InfoStrokeIcon from 'svg-icons-legacy/src/16/info-stroke.svg';

import { INotificationProps, NOTIFICATION_TYPE } from '../../types/elements';
import { validationIcons } from '../../utils/notification/icons';
import { StyledIcon } from '../../views/notification/StyledIcon';
import { StyledNotification } from '../../views/notification/StyledNotification';
import { COMPONENT_IDS } from '../utils';
import { Close } from './Close';
import { Paragraph } from './Paragraph';
import { Title } from './Title';

export const NotificationComponent = forwardRef<HTMLDivElement, INotificationProps>(
  ({ children, type, ...props }, ref) => {
    const Icon = type ? validationIcons[type] : InfoStrokeIcon;

    return (
      <StyledNotification
        ref={ref}
        $type={type}
        $isFloating
        role="alert"
        {...props}
        data-garden-id={COMPONENT_IDS['notifications.notification']}
        data-garden-version={PACKAGE_VERSION}
      >
        {!!type && (
          <StyledIcon
            $type={type}
            data-garden-id={COMPONENT_IDS['notifications.icon']}
            data-garden-version={PACKAGE_VERSION}
          >
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
  type: PropTypes.oneOf(NOTIFICATION_TYPE)
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
