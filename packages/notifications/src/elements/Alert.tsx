/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledAlert, StyledIcon } from '../styled';
import { validationIcons, validationHues } from '../utils/icons';
import { ARRAY_VALIDATION_TYPE, VALIDATION_HUE } from '../utils/types';
import { NotificationsContext } from '../utils/useNotificationsContext';

export interface IAlertProps extends HTMLAttributes<HTMLDivElement> {
  /** Applies alert type styles */
  type: 'success' | 'warning' | 'error' | 'info';
}

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Alert = React.forwardRef<HTMLDivElement, IAlertProps>((props, ref) => {
  const hue = validationHues[props.type];
  const Icon = validationIcons[props.type] as any;

  return (
    <NotificationsContext.Provider value={hue as VALIDATION_HUE}>
      <StyledAlert ref={ref} hue={hue} {...props}>
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
  type: PropTypes.oneOf(ARRAY_VALIDATION_TYPE).isRequired
};
