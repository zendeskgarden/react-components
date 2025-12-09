/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
'use strict';

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

function requiredParam(argName, customMessage) {
  if (customMessage) {
    throw new Error(customMessage);
  }
  throw new Error(`"${argName}" is required`);
}

if (process.env.NODE_ENV !== 'production') {
  console.warn('Deprecation Warning: The `@zendeskgarden/react-utilities` package has been deprecated. ' + 'It will be removed in an upcoming major release. Migrate to the ' + '`@zendeskgarden/container-utilities` package to continue receiving updates.');
}

exports.hasType = _;
exports.requiredParam = requiredParam;
