/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { useRef, useEffect } from 'react';
import activeElement from 'dom-helpers/activeElement';

function useFocusableMount({
  isMounted,
  focusOnMount,
  restoreFocus,
  targetRef
}) {
  const triggerRef = useRef();
  useEffect(() => {
    if (isMounted && focusOnMount && targetRef.current) {
      triggerRef.current = activeElement();
      targetRef.current.focus();
    }
  }, [isMounted, focusOnMount, targetRef]);
  useEffect(() => {
    if (!isMounted && restoreFocus && triggerRef.current) {
      triggerRef.current.focus();
    }
  }, [isMounted, restoreFocus, triggerRef]);
}

export { useFocusableMount };
