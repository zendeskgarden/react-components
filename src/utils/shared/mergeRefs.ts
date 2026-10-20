/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* Based on react-merge-refs 3.0.2 (MIT, Greg Bergé): https://github.com/gregberge/react-merge-refs */

import { type Ref, type RefCallback, version } from 'react';

const assignRef = <T>(ref: Ref<T> | undefined, value: T | null) => {
  if (typeof ref === 'function') {
    return ref(value);
  } else if (ref) {
    (ref as { current: T | null }).current = value;
  }

  return undefined;
};

/* React 19 calls a returned cleanup instead of calling the ref with `null` */
const mergeRefsReact19 =
  <T>(refs: (Ref<T> | undefined)[]): RefCallback<T> =>
  value => {
    const cleanups = refs.map(ref => {
      const cleanup = assignRef(ref, value);

      return typeof cleanup === 'function' ? cleanup : () => assignRef(ref, null);
    });

    return () => cleanups.forEach(cleanup => cleanup());
  };

const mergeRefsReact16 =
  <T>(refs: (Ref<T> | undefined)[]): RefCallback<T> =>
  value => {
    refs.forEach(ref => assignRef(ref, value));
  };

export const mergeRefs = parseInt(version, 10) >= 19 ? mergeRefsReact19 : mergeRefsReact16;
