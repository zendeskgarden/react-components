/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import PropTypes from 'prop-types';

import InfoIcon from '@zendeskgarden/svg-icons/src/16/info-stroke.svg';
import WarningIcon from '@zendeskgarden/svg-icons/src/16/alert-warning-stroke.svg';
import SuccessIcon from '@zendeskgarden/svg-icons/src/16/check-circle-stroke.svg';

import { TYPE, IGlobalAlertProps } from '../../types';

export const GlobalAlertIcon = ({ type, ...props }: IGlobalAlertProps) => {
  const combinedProps = { 'aria-hidden': true, ...props };

  const [success, warning, error, info] = TYPE;

  switch (type) {
    case success:
      return <SuccessIcon {...combinedProps} />;
    case warning:
      return <WarningIcon {...combinedProps} />;
    case error:
    case info:
    default:
      return <InfoIcon {...combinedProps} />;
  }
};

GlobalAlertIcon.displayName = 'GlobalAlert.Icon';

GlobalAlertIcon.propTypes = {
  type: PropTypes.oneOf(TYPE).isRequired
};
