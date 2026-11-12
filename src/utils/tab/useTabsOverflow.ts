/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { type Dispatch, type RefObject, type SetStateAction, useRef, useState } from 'react';

import type { IGardenTheme } from '../../theming/types';
import { getTabGap, getTabSize } from '../../views/tab/StyledTabListContainer';
import { useBrowserLayoutEffect } from '../shared/useBrowserLayoutEffect';
import type { ITabData } from './toTabs';

export interface ITabIndicatorGeometry {
  /** Distance from the start edge of the tab list container to the target, in pixels */
  offset: number;
  /** Width (horizontal) or height (vertical) of the target, in pixels */
  size: number;
  /** Whether the selection changed since the last measure */
  isAnimated: boolean;
}

/**
 * Where focus must go after tabs move into or out of the overflow menu.
 * `menu` means focus was in the open menu while some of its items became
 * visible tabs: if the focused item unmounted, close the menu and focus the
 * trigger.
 */
export type PendingTabFocus = 'trigger' | 'tab' | 'menu' | undefined;

interface IUseTabsOverflowOptions {
  /** The tab list container element */
  containerRef: RefObject<HTMLDivElement | null>;
  /** The `role="tablist"` element */
  listRef: RefObject<HTMLDivElement | null>;
  /** The overflow menu wrapper element */
  overflowRef: RefObject<HTMLDivElement | null>;
  /** The overflow menu trigger element */
  triggerRef: RefObject<HTMLButtonElement | null>;
  /** The overflow menu list element, portaled out of the wrapper */
  menuRef: RefObject<HTMLUListElement | null>;
  /** The collected tabs, in DOM order; entries without a rendered tab element are ignored */
  tabs: ITabData[];
  /** The selected tab value */
  selectedItem: unknown;
  isVertical: boolean;
  theme: IGardenTheme;
  /** The current number of visible tabs (owned by `Tabs`) */
  visibleCount: number;
  setVisibleCount?: Dispatch<SetStateAction<number>>;
  /** The id the hook gives the tab element of a value */
  getTabId?: (value: unknown) => string | undefined;
}

/**
 * Measures which leading tabs fit the container's inline size (or block size
 * for vertical tabs, when the consumer constrains the height) and writes the
 * count back. Also measures the extents that size the tab list and the
 * spacer, and the geometry of the selection indicator: under the selected
 * tab, or under the overflow trigger when the selected tab is overflowed.
 *
 * @returns The extents, the indicator geometry, the pending focus target, and
 * which collected tabs have a measurable element.
 */
export const useTabsOverflow = ({
  containerRef,
  listRef,
  overflowRef,
  triggerRef,
  menuRef,
  tabs,
  selectedItem,
  isVertical,
  theme,
  visibleCount,
  setVisibleCount,
  getTabId
}: IUseTabsOverflowOptions) => {
  const getTabIdRef = useRef(getTabId);

  getTabIdRef.current = getTabId;

  /* Which collected tabs have a measurable element (false: ghost, wrapped panel, display: none) */
  const [rendered, setRendered] = useState<boolean[] | undefined>(undefined);
  const [visibleExtent, setVisibleExtent] = useState<number | undefined>(undefined);
  const [hiddenExtent, setHiddenExtent] = useState<number | undefined>(undefined);
  const [indicator, setIndicator] = useState<ITabIndicatorGeometry | undefined>(undefined);
  const pendingFocus = useRef<PendingTabFocus>(undefined);
  const lastSelected = useRef<{ value: unknown } | undefined>(undefined);

  useBrowserLayoutEffect(() => {
    const container = containerRef.current;
    const list = listRef.current;

    if (!container || !list) {
      return undefined;
    }

    const measure = () => {
      const containerRect = container.getBoundingClientRect();

      /* A tab list with no box (a display: none ancestor) must not write the
       * shared visible count. */
      if (containerRect.width === 0 && containerRect.height === 0) {
        return;
      }

      /* Pair each collected tab with its element by the id the hook gives it,
       * scoped to this list: collected entries that render no tab (wrapped
       * panels, ghosts) would otherwise shift the pairing. */
      const byId = new Map(
        Array.from(list.querySelectorAll<HTMLElement>('[role="tab"]')).map(element => [
          element.id,
          element
        ])
      );
      /* Duplicate values map to the same element; claim it once. */
      const claimed = new Set<HTMLElement>();
      const tabElements = tabs.map(tab => {
        const id = getTabIdRef.current?.(tab.value);
        const element = id === undefined ? undefined : byId.get(id);

        if (!element || claimed.has(element)) {
          return undefined;
        }

        claimed.add(element);

        const rect = element.getBoundingClientRect();

        /* Ghosts and display: none tabs have no measurable box. */
        return rect.width > 0 || rect.height > 0 ? element : undefined;
      });
      const nextRendered = tabElements.map(Boolean);

      setRendered(previous => (previous?.join() === nextRendered.join() ? previous : nextRendered));

      const available = isVertical ? containerRect.height : containerRect.width;
      const getEnd = (element: HTMLElement) => {
        const rect = element.getBoundingClientRect();

        if (isVertical) {
          return rect.bottom - containerRect.top;
        }

        return theme.rtl ? containerRect.right - rect.left : rect.right - containerRect.left;
      };
      const ends = tabElements.map(element => (element ? getEnd(element) : undefined));
      const maxEnd = (upTo: number) =>
        Math.max(0, ...ends.slice(0, upTo).filter((end): end is number => end !== undefined));
      const lastEnd = maxEnd(ends.length);
      const fitsAll = lastEnd <= available + 0.5;
      let nextCount = tabs.length;

      if (!fitsAll) {
        /* Reserve one trigger so it never pushes the last visible tab out. */
        const reserve = getTabSize(theme, isVertical) + getTabGap(theme, isVertical);

        nextCount = ends.findIndex(end => end !== undefined && end > available - reserve + 0.5);

        if (nextCount < 0) {
          nextCount = tabs.length;
        }
      }

      /* Keep keyboard focus on a visible control when tabs move into or out
       * of the overflow menu. The menu is portaled, so focus inside it is
       * not inside the overflow wrapper. */
      const active = document.activeElement;
      const menuHasFocus =
        !!active && !!(overflowRef.current?.contains(active) || menuRef.current?.contains(active));

      if (nextCount < visibleCount) {
        const index = tabElements.indexOf(active as HTMLElement);

        if (index >= nextCount) {
          pendingFocus.current = 'trigger';
        }
      } else if (nextCount > visibleCount && menuHasFocus) {
        if (nextCount === tabs.length) {
          pendingFocus.current = 'tab';
        } else if (active !== triggerRef.current) {
          pendingFocus.current = 'menu';
        }
      }

      /* While overflowing, the tab list hugs its visible tabs, so the trigger
       * follows the last one. */
      let nextExtent: number | undefined;

      if (!fitsAll) {
        nextExtent = maxEnd(nextCount);
      }

      setVisibleExtent(nextExtent);
      /* The overflowed tabs' size, which the spacer keeps in the container's
       * intrinsic size (see `StyledTabOverflowSpacer`). */
      setHiddenExtent(nextExtent === undefined ? undefined : Math.max(lastEnd - nextExtent, 0));

      if (nextCount !== visibleCount) {
        setVisibleCount?.(nextCount);

        return;
      }

      const selectedIndex = tabs.findIndex(tab => tab.value === selectedItem);
      let target: HTMLElement | null | undefined;

      if (selectedIndex < 0) {
        target = undefined;
      } else if (selectedIndex < visibleCount) {
        target = tabElements[selectedIndex];
      } else {
        target = triggerRef.current;
      }

      const rect = target?.getBoundingClientRect();
      let size = 0;

      if (rect) {
        size = isVertical ? rect.height : rect.width;
      }

      if (!rect || size <= 0) {
        setIndicator(undefined);
        lastSelected.current = undefined;

        return;
      }

      const offset = isVertical ? rect.top - containerRect.top : rect.left - containerRect.left;
      /* Animate selection changes only; resizes and first placement snap. */
      const isAnimated =
        lastSelected.current !== undefined && lastSelected.current.value !== selectedItem;

      lastSelected.current = { value: selectedItem };
      setIndicator(previous =>
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

    observer?.observe(container);
    list.querySelectorAll('[role="tab"]').forEach(tab => observer?.observe(tab));
    window.addEventListener('resize', measure);
    document.fonts?.addEventListener('loadingdone', measure);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', measure);
      document.fonts?.removeEventListener('loadingdone', measure);
    };
  }, [
    containerRef,
    listRef,
    overflowRef,
    triggerRef,
    menuRef,
    tabs,
    selectedItem,
    isVertical,
    theme,
    visibleCount,
    setVisibleCount
  ]);

  return { visibleExtent, hiddenExtent, indicator, pendingFocus, rendered };
};
