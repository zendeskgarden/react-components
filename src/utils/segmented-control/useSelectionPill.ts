/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useEffect, useLayoutEffect, useRef, useState, type RefObject } from 'react';

import { advanceSpring } from './advanceSpring';

/* Only reference `window` in the browser to support SSR environments */
const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

interface IMotion {
  x: number;
  velocity: number;
  width: number;
  widthVelocity: number;
  layoutKey: string;
}

/**
 * Positions and animates the decorative selection pill under the selected
 * segment. Geometry belongs to the decoration; checked state never waits for
 * measurement.
 *
 * @param selectedValue Value of the selected option, if any
 * @param layoutKey Changes whenever something that moves or resizes segments
 *   changes (labels, size, width, direction). The pill snaps, instead of
 *   springing, across a layout change.
 * @param segments Segment label elements by option value
 * @param consumeKeyboardSelection Reports (once) whether the selection came
 *   from the keyboard, so the pill can keep up with rapid arrow presses
 */
export const useSelectionPill = (
  selectedValue: string | undefined,
  layoutKey: string,
  segments: RefObject<Map<string, HTMLLabelElement>>,
  consumeKeyboardSelection: (selected: string) => boolean
) => {
  const pillRef = useRef<HTMLSpanElement>(null);
  const [isReady, setIsReady] = useState(false);
  /* Survives effect runs, so a new target continues from the pill's current motion */
  const motion = useRef<IMotion | undefined>(undefined);

  useBrowserLayoutEffect(() => {
    const pill = pillRef.current;
    const selected = selectedValue === undefined ? undefined : segments.current.get(selectedValue);

    if (!pill || !selected) {
      setIsReady(false);
      motion.current = undefined;

      return undefined;
    }

    /*
     * Use the window that owns the segment, not the global one, so the pill
     * also tracks changes when rendered into an iframe or another window.
     * A mounted element always has a window.
     */
    const doc = selected.ownerDocument;
    const view = doc.defaultView!;
    const preference = view.matchMedia('(prefers-reduced-motion: reduce)');
    let frame: number | undefined;
    let previousTime = 0;
    let targetLeft = 0;
    let targetWidth = 0;
    let geometry = '';

    const stop = () => {
      if (frame !== undefined) {
        view.cancelAnimationFrame(frame);
      }

      frame = undefined;
    };

    /* The pill is moved directly, not through React state, to avoid a render per frame */
    const paint = ({ x, width }: IMotion) => {
      pill.style.transform = `translateX(${x}px)`;
      pill.style.width = `${width}px`;
    };

    /*
     * A frame is only ever scheduled once `motion` is set, and the effect
     * cleanup cancels it before `motion` can be cleared.
     */
    const tick = (time: number) => {
      const state = motion.current!;
      const elapsed = (time - previousTime) / 1000;

      previousTime = time;

      /* Solve both edges with the same spring so content-sized pills resize smoothly */
      const position = advanceSpring(state.x, state.velocity, targetLeft, elapsed);
      const width = advanceSpring(state.width, state.widthVelocity, targetWidth, elapsed);

      state.x = position.position;
      state.velocity = position.velocity;
      state.width = width.position;
      state.widthVelocity = width.velocity;
      paint(state);
      frame = position.settled && width.settled ? undefined : view.requestAnimationFrame(tick);
    };

    const measure = (animate = false) => {
      const left = selected.offsetLeft;
      const top = selected.offsetTop;
      const width = selected.offsetWidth;
      const height = selected.offsetHeight;
      const nextGeometry = [left, top, width, height].join();

      if (!animate && geometry === nextGeometry && !preference.matches) {
        return;
      }

      geometry = nextGeometry;
      targetLeft = left;
      targetWidth = width;
      stop();
      pill.style.top = `${top}px`;
      pill.style.height = `${height}px`;
      setIsReady(width > 0);

      if (
        !animate ||
        preference.matches ||
        !motion.current ||
        motion.current.layoutKey !== layoutKey ||
        !width
      ) {
        motion.current = { x: left, velocity: 0, width, widthVelocity: 0, layoutKey };
        paint(motion.current);
      } else {
        /* Start the clock now so the first frame moves, even during rapid navigation */
        previousTime = view.performance.now();
        frame = view.requestAnimationFrame(tick);
      }
    };

    /*
     * Keep the pill aligned with immediate keyboard focus; pointer changes
     * retain the spring. `selectedValue` is defined because `selected` is.
     */
    measure(!consumeKeyboardSelection(selectedValue!));

    const onResize = () => measure();
    const onPreferenceChange = () => {
      if (preference.matches) {
        measure();
      }
    };
    /*
     * A ResizeObserver reports size, not position. Moves caused by a sibling
     * changing size are covered by `layoutKey` re-running this effect.
     */
    const observer =
      typeof view.ResizeObserver === 'undefined' ? undefined : new view.ResizeObserver(onResize);

    observer?.observe(selected);

    if (selected.parentElement) {
      observer?.observe(selected.parentElement);
    }

    view.addEventListener('resize', onResize);
    doc.fonts?.addEventListener('loadingdone', onResize);
    preference.addEventListener('change', onPreferenceChange);

    return () => {
      stop();
      observer?.disconnect();
      view.removeEventListener('resize', onResize);
      doc.fonts?.removeEventListener('loadingdone', onResize);
      preference.removeEventListener('change', onPreferenceChange);
    };
  }, [selectedValue, layoutKey, segments, consumeKeyboardSelection]);

  return { pillRef, isReady };
};
