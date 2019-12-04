/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { StyledNotification, IStyledNotificationProps } from '../styled';
import { VALIDATION } from '../utils/types';

/**
 * Supports all `<div>` props
 */
export const Notification = React.forwardRef<HTMLDivElement, IStyledNotificationProps>(
  (props, ref) => <StyledNotification ref={ref} {...props} />
);

Notification.propTypes = {
  type: PropTypes.oneOf([VALIDATION.SUCCESS, VALIDATION.WARNING, VALIDATION.ERROR, VALIDATION.INFO])
};
