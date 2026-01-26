/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import PropTypes from 'prop-types';
import React from 'react';

import { StyledAlert, StyledIcon } from '../../styled';
import { IAlertProps, TYPE } from '../../types';
import { validationIcons } from '../../utils/icons';
import { NotificationsContext } from '../../utils/useNotificationsContext';
import { Close } from './Close';
import { Paragraph } from './Paragraph';
import { Title } from './Title';

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
