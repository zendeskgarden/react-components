/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

let idCounter = 0;

/**
 * This generates a unique ID for all autocomplete inputs
 * @param {String} prefix the prefix for the id
 * @return {String} the unique ID
 */
function generateId(prefix = 'garden') {
  return `${prefix}-${idCounter++}`;
}

/**
 * This is only used in tests... Could be useful in SSR?
 * @param {Number} num The number to set the idCountry to
 */
function setIdCounter(num) {
  idCounter = num;
}

/**
 * Utility methods for ID management
 * - `generateId(prefix = 'garden')`
 *   - Generates a new unique ID based on current number of elements
 * - `setIdCounter(num)`
 *   - Useful for creating consistent ID's in a testing environment
 *
 * @component
 **/
export default {
  generateId,
  setIdCounter
};
