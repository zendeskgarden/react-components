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
import { validationIcons, validationHues } from '../utils/icons';
import { Hue, NotificationsContext } from '../utils/useNotificationsContext';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Alert = React.forwardRef<HTMLDivElement, IAlertProps>(({ role, ...props }, ref) => {
  const hue = validationHues[props.type];
  const Icon = validationIcons[props.type] as any;

  return (
    <NotificationsContext.Provider value={hue as Hue}>
      <StyledAlert ref={ref} hue={hue} role={role === undefined ? 'alert' : role} {...props}>
        <StyledIcon hue={hue}>
          <Icon />
        </StyledIcon>
        {props.children}
      </StyledAlert>
    </NotificationsContext.Provider>
  );
});

Alert.displayName = 'Alert';

Alert.propTypes = {
  type: PropTypes.oneOf(TYPE).isRequired
};
