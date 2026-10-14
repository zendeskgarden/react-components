/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { Validation } from '../../types/elements';

/**
 * Value of `aria-invalid` for a text field with the given validation.
 */
export const isInvalid = (validation?: Validation) => {
  return validation === 'warning' || validation === 'error';
};
