/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import requiredParam from './requiredParam';

describe('requiredParam()', () => {
  it('throws default message if called', () => {
    expect(() => {
      requiredParam('foo');
    }).toThrow('"foo" is required');
  });

  it('throws custom message if provided', () => {
    const customErrorMessage = 'this is a custom error message';

    expect(() => {
      requiredParam('foo', customErrorMessage);
    }).toThrow(customErrorMessage);
  });
});
