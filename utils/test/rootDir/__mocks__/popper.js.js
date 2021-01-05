/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

export default class {
  static placements = [
    'auto-start',
    'auto',
    'auto-end',
    'top-start',
    'top',
    'top-end',
    'right-start',
    'right',
    'right-end',
    'bottom-end',
    'bottom',
    'bottom-start',
    'left-end',
    'left',
    'left-start'
  ];

  constructor() {
    // eslint-disable-next-line no-constructor-return
    return {
      // eslint-disable-next-line no-empty-function
      destroy: () => {},
      // eslint-disable-next-line no-empty-function
      scheduleUpdate: () => {},
      // eslint-disable-next-line no-empty-function
      enableEventListeners: () => {},
      // eslint-disable-next-line no-empty-function
      disableEventListeners: () => {}
    };
  }
}
