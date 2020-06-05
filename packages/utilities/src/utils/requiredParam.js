/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

/**
 * Used to ensure argument has been provided.
 * Applied as a default parameter.
 * @param {String} argName the name of argument
 * @param {String} customMessage custom message to display
 */
export default function requiredParam(argName, customMessage) {
  if (customMessage) {
    throw new Error(customMessage);
  }

  throw new Error(`"${argName}" is required`);
}
