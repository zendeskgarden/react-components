/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Borrowed from the Paypal/Downshift libraries utility.
 * Original License - MIT License
 * https://github.com/paypal/downshift/blob/master/src/utils.js
 */

/**
 * @component
 *
 * This is intended to be used to compose event handlers.
 * They are executed in order until one of them calls
 * `event.preventDefault()`
 *
 * @param {Function} fns the event hanlder functions
 * @return {Function} the event handler to add to an element
 */
export default function composeEventHandlers(...fns) {
  return (event, ...args) =>
    fns.some(fn => {
      fn && fn(event, ...args);

      return event && event.defaultPrevented;
    });
}
