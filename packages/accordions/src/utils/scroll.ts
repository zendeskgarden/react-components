/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export function disableScroll() {
  document.body.style.overflow = 'hidden';

  const x = window.scrollX;
  const y = window.scrollY;

  window.onscroll = () => {
    window.scrollTo(x, y);
  };
}

export const enableScroll = () => {
  setTimeout(() => {
    // Set overflow on the next tick of event loop so Chromium does not add scrollbars.
    document.body.style.overflow = '';
  }, 0);

  window.onscroll = null;
};
