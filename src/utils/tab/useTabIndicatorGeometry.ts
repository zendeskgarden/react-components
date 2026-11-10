/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { type RefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';

export interface ITabIndicatorGeometry {
  /** Distance from the start edge of the tab list to the selected tab, in pixels */
  offset: number;
  /** Width (horizontal) or height (vertical) of the selected tab, in pixels */
  size: number;
  /** Whether the selection changed since the last measure */
  isAnimated: boolean;
}

const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/**
 * Measures the selected tab of a tab list. Resizes of the list or of a tab,
 * window resizes and web font loads measure again.
 *
 * @param {RefObject<HTMLElement>} listRef The tab list element
 * @param {unknown} selectedValue The selected tab value
 * @param {boolean} isVertical Whether the tabs are stacked
 *
 * @returns The geometry of the selected tab, or `undefined` when no tab is
 * selected or rendered.
 */
export const useTabIndicatorGeometry = (
  listRef: RefObject<HTMLElement | null>,
  selectedValue: unknown,
  isVertical: boolean
) => {
  const [geometry, setGeometry] = useState<ITabIndicatorGeometry>();
  const lastSelected = useRef<{ value: unknown } | undefined>(undefined);

  useBrowserLayoutEffect(() => {
    const list = listRef.current;

    if (!list) {
      return undefined;
    }

    const measure = () => {
      const tab = list.querySelector<HTMLElement>('[role="tab"][aria-selected="true"]');
      const listRect = list.getBoundingClientRect();
      const tabRect = tab?.getBoundingClientRect();
      let size = 0;

      if (tabRect) {
        size = isVertical ? tabRect.height : tabRect.width;
      }

      if (!tabRect || size <= 0) {
        setGeometry(undefined);
        lastSelected.current = undefined;

        return;
      }

      const offset = isVertical ? tabRect.top - listRect.top : tabRect.left - listRect.left;
      /* Animate selection changes only; resizes and first placement snap. */
      const isAnimated =
        lastSelected.current !== undefined && lastSelected.current.value !== selectedValue;

      lastSelected.current = { value: selectedValue };
      setGeometry(previous =>
        previous?.offset === offset &&
        previous.size === size &&
        (previous.isAnimated || !isAnimated)
          ? previous
          : { offset, size, isAnimated }
      );
    };

    measure();

    const observer =
      typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(measure);

    observer?.observe(list);
    list.querySelectorAll('[role="tab"]').forEach(tab => observer?.observe(tab));
    window.addEventListener('resize', measure);
    document.fonts?.addEventListener('loadingdone', measure);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', measure);
      document.fonts?.removeEventListener('loadingdone', measure);
    };
  });

  return geometry;
};
