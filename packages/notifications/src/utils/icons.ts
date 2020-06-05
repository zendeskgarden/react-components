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
import { VALIDATION_TYPE } from './types';

export const validationIcons: Record<VALIDATION_TYPE, Record<string, unknown>> = {
  success: CheckCircleStrokeIcon,
  error: AlertErrorStrokeIcon,
  warning: AlertWarningStrokeIcon,
  info: InfoStrokeIcon
};

export const validationHues: Record<VALIDATION_TYPE, string> = {
  success: 'successHue',
  error: 'dangerHue',
  warning: 'warningHue',
  info: 'neutralHue'
};
