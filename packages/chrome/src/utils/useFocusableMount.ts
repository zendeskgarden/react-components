/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useLayoutEffect, useRef, MutableRefObject } from 'react';
import activeElement from 'dom-helpers/activeElement';

export interface IUseFocusableMountProp {
  isMounted?: boolean;
  focusOnMount?: boolean;
  restoreFocus?: boolean;
  targetRef: MutableRefObject<HTMLElement | null>;
}

export function useFocusableMount({
  isMounted,
  focusOnMount,
  restoreFocus,
  targetRef
}: IUseFocusableMountProp) {
  const wasOpenRef = useRef<boolean>(false);
  const triggerRef = useRef<HTMLElement | Element | null>();

  useLayoutEffect(() => {
    if (isMounted && focusOnMount && targetRef.current) {
      triggerRef.current = activeElement();
      wasOpenRef.current = true;
      targetRef.current.focus();
    }
  }, [wasOpenRef, isMounted, focusOnMount, targetRef]);

  useLayoutEffect(() => {
    if (wasOpenRef.current && !isMounted && restoreFocus && triggerRef.current) {
      (triggerRef.current as HTMLElement).focus();
      wasOpenRef.current = false;
    }
  }, [wasOpenRef, isMounted, restoreFocus, triggerRef]);
}
