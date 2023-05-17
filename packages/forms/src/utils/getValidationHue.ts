/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { Validation } from '../types';

export function getValidationHue(validation?: Validation, defaultHue = 'primaryHue') {
  switch (validation) {
    case 'success':
      return 'successHue';
    case 'warning':
      return 'warningHue';
    case 'error':
      return 'dangerHue';
    default:
      return defaultHue;
  }
}
