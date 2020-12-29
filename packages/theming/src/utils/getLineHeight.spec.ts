/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import getLineHeight from './getLineHeight';

describe('getLineHeight', () => {
  it('gets line height for pixel values', () => {
    const lineHeight = getLineHeight('20px', '14px');
    const expected = 20 / 14;

    expect(lineHeight).toBe(expected);
  });

  it('gets line height for integer values', () => {
    const lineHeight = getLineHeight(20, 14);
    const expected = 20 / 14;

    expect(lineHeight).toBe(expected);
  });

  it('gets line height for mixed values', () => {
    const lineHeight = getLineHeight('20px', 14);
    const expected = 20 / 14;

    expect(lineHeight).toBe(expected);
  });

  it('throws if called with non-pixel values', () => {
    const originalError = console.error;

    console.error = jest.fn();

    expect(() => getLineHeight('2em', 14)).toThrow();

    console.error = originalError;
  });

  it('throws if called with non-matching value units', () => {
    const originalError = console.error;

    console.error = jest.fn();

    expect(() => getLineHeight('2px', '1em')).toThrow();

    console.error = originalError;
  });
});
