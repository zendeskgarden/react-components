/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import type { Ref, RefCallback } from 'react';

export const mergeRefs =
  <T>(refs: (Ref<T> | undefined | null)[]): RefCallback<T> =>
  value => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref) {
        (ref as { current: T | null }).current = value;
      }
    }
  };
