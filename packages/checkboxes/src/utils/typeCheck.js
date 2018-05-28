/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * This checks that a component is the same type of instance of another component
 * @param {Object} react component object
 * @param {Function} component to match
 * @return {Boolean} if they match or not
 */
export default function typeCheck(a, b) {
  return a.type === b || a.type.prototype instanceof b;
}
