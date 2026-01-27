/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { ITooltipProps } from '../types';

/**
 * Convert to the intended tooltip size for the given type.
 *
 * @param {string} size Tooltip size prop value
 * @param {string} type Tooltip type prop value
 *
 * @returns A tooltip size.
 */
export const toSize = (size: ITooltipProps['size'], type: ITooltipProps['type']) => {
  let retVal = size;

  if (retVal === undefined) {
    retVal = type === 'dark' ? 'small' : 'large';
  }

  return retVal;
};
