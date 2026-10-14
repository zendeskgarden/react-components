/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { vi } from 'vitest';

class MockResizeObserver {
  constructor(callback: ResizeObserverCallback) {
    /* Non-standard property, so that a test can trigger the observer of the
     * rendered tree (the stand-in for the polyfill that v9's Jest config
     * mapped `use-resize-observer` to) */
    (
      window as unknown as { resizeObserverCallback: ResizeObserverCallback }
    ).resizeObserverCallback = callback;
  }

  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();
}

/**
 * jsdom has no `ResizeObserver`. Call this at the top of a test file that
 * renders a component that uses `use-resize-observer`.
 */
export const stubResizeObserver = () => {
  vi.stubGlobal('ResizeObserver', MockResizeObserver);
};
