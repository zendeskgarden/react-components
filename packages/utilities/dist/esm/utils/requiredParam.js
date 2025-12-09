/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
function requiredParam(argName, customMessage) {
  if (customMessage) {
    throw new Error(customMessage);
  }
  throw new Error(`"${argName}" is required`);
}

export { requiredParam as default };
