/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import isRtl from './isRtl';

describe('isRtl', () => {
  it('returns true if theme is rtl', () => {
    expect(
      isRtl({
        theme: {
          rtl: true
        }
      })
    ).toBe(true);
  });

  it('returns false if theme is ltr', () => {
    expect(
      isRtl({
        theme: {
          rtl: false
        }
      })
    ).toBe(false);
  });

  it('returns false if no theme is provided', () => {
    expect(isRtl({})).toBe(false);
  });

  it('returns false if no props are provided', () => {
    expect(isRtl()).toBe(false);
  });
});
