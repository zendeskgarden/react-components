/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import AlertErrorStrokeIcon from '@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg';
import CheckCircleStrokeIcon from '@zendeskgarden/svg-icons/src/16/check-circle-stroke.svg';
import AlertWarningStrokeIcon from '@zendeskgarden/svg-icons/src/16/alert-warning-stroke.svg';
import InfoStrokeIcon from '@zendeskgarden/svg-icons/src/16/info-stroke.svg';
import { Type } from '../types';

export const validationIcons: Record<Type, Record<string, unknown>> = {
  success: CheckCircleStrokeIcon,
  error: AlertErrorStrokeIcon,
  warning: AlertWarningStrokeIcon,
  info: InfoStrokeIcon
};

export const validationTypes: Record<Type, Type> = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info'
};
