/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
const isValidHex = hexString => {
  const regEx = /^#(?:(?:[0-9A-F]{6}(?:[0-9A-F]{2})?)|(?:[0-9A-F]{3})(?:[0-9A-F]?))$/iu;
  return regEx.test(hexString);
};

export { isValidHex };
