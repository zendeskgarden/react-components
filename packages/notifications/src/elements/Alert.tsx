/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { IAlertProps, TYPE } from '../types';
import { StyledAlert, StyledIcon } from '../styled';
import { validationIcons } from '../utils/icons';
import { NotificationsContext } from '../utils/useNotificationsContext';
import { Title } from './content/Title';
import { Paragraph } from './content/Paragraph';
import { Close } from './content/Close';

export const AlertComponent = React.forwardRef<HTMLDivElement, IAlertProps>(
  ({ role, type, ...props }, ref) => {
    const Icon = validationIcons[type] as any;

    return (
      <NotificationsContext.Provider value={type}>
        <StyledAlert ref={ref} $type={type} role={role === undefined ? 'alert' : role} {...props}>
          <StyledIcon $type={type}>
            <Icon />
          </StyledIcon>
          {props.children}
        </StyledAlert>
      </NotificationsContext.Provider>
    );
  }
);

AlertComponent.displayName = 'Alert';

AlertComponent.propTypes = {
  type: PropTypes.oneOf(TYPE).isRequired
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
