/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useEffect, useRef, MutableRefObject } from 'react';
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
  const triggerRef = useRef<HTMLElement | Element | null>();

  useEffect(() => {
    if (isMounted && focusOnMount && targetRef.current) {
      triggerRef.current = activeElement();
      targetRef.current.focus();
    }
  }, [isMounted, focusOnMount, targetRef]);

  useEffect(() => {
    if (!isMounted && restoreFocus && triggerRef.current) {
      (triggerRef.current as HTMLElement).focus();
    }
  }, [isMounted, restoreFocus, triggerRef]);
}
