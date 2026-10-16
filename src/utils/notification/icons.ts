/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import CheckCircleFillIcon from '@zendeskgarden/svg-icons/src/check-circle-fill.svg';
import ExclamationCircleFillIcon from '@zendeskgarden/svg-icons/src/exclamation-circle-fill.svg';
import ExclamationTriangleFillIcon from '@zendeskgarden/svg-icons/src/exclamation-triangle-fill.svg';
import InfoCircleFillIcon from '@zendeskgarden/svg-icons/src/info-circle-fill.svg';

import { Type } from '../../types/elements';

export const validationIcons: Record<Type, Record<string, unknown>> = {
  success: CheckCircleFillIcon,
  error: ExclamationCircleFillIcon,
  warning: ExclamationTriangleFillIcon,
  info: InfoCircleFillIcon
};

export const validationTypes: Record<Type, Type> = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'info'
};
