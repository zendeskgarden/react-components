/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
function _() {
  let a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  let b = arguments.length > 1 ? arguments[1] : undefined;
  if (!a) return false;
  const {
    type: component = {}
  } = a;
  const {
    target,
    hasType
  } = component;
  let result;
  if (hasType) {
    result = hasType() === b;
  } else if (target && target.hasType) {
    result = target.hasType() === b;
  }
  return result;
}

export { _ as default };
