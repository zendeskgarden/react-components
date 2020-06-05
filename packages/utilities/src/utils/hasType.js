/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/* eslint-disable default-param-last */

/**
 * This checks that a component is the same type of instance of another component
 * @param {Object} react component object
 * @param {Function} component to match
 * @return {Boolean} if they match or not
 */
export default function _(a = {}, b) {
  if (!a) return false;
  const { type: component = {} } = a;
  const { target, hasType } = component;

  let result;

  if (hasType) {
    result = hasType() === b;
  } else if (target && target.hasType) {
    result = target.hasType() === b;
  }

  return result;
}
