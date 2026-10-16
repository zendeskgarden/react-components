/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import { forwardRef } from 'react';

import { NotificationsProvider } from '../../context/notification/NotificationsContext';
import { IAlertProps, NOTIFICATION_TYPE } from '../../types/elements';
import { validationIcons } from '../../utils/notification/icons';
import { StyledAlert } from '../../views/notification/StyledAlert';
import { StyledIcon } from '../../views/notification/StyledIcon';
import { COMPONENT_IDS } from '../utils';
import { Close } from './AlertClose';
import { Paragraph } from './AlertParagraph';
import { Title } from './AlertTitle';

export const AlertComponent = forwardRef<HTMLDivElement, IAlertProps>(
  ({ role, type, ...props }, ref) => {
    const Icon = validationIcons[type] as any;

    return (
      <NotificationsProvider value={type}>
        <StyledAlert
          ref={ref}
          $type={type}
          role={role === undefined ? 'alert' : role}
          {...props}
          data-garden-id={COMPONENT_IDS['notifications.alert']}
          data-garden-version={PACKAGE_VERSION}
        >
          <StyledIcon
            $type={type}
            data-garden-id={COMPONENT_IDS['notifications.icon']}
            data-garden-version={PACKAGE_VERSION}
          >
            <Icon />
          </StyledIcon>
          {props.children}
        </StyledAlert>
      </NotificationsProvider>
    );
  }
);

AlertComponent.displayName = 'Alert';

AlertComponent.propTypes = {
  type: PropTypes.oneOf(NOTIFICATION_TYPE).isRequired
};

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Alert = AlertComponent as typeof AlertComponent & {
  Close: typeof Close;
  Paragraph: typeof Paragraph;
  Title: typeof Title;
};

Alert.Close = Close;
Alert.Paragraph = Paragraph;
Alert.Title = Title;
