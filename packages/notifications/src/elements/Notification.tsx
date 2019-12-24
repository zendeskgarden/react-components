/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { StyledNotification, IStyledNotificationProps } from '../styled';
import { ARRAY_VALIDATION_TYPE } from '../utils/types';

/**
 * Supports all `<div>` props
 */
export const Notification = React.forwardRef<
  HTMLDivElement,
  IStyledNotificationProps & HTMLAttributes<HTMLDivElement>
>((props, ref) => <StyledNotification ref={ref} {...props} />);

Notification.propTypes = {
  type: PropTypes.oneOf(ARRAY_VALIDATION_TYPE)
};
