/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { getStartOfWeek } from './calendar-utils';

describe('Calendar Utilities', () => {
  describe('getStartOfWeek()', () => {
    it('provides correct mapping if region is matched', () => {
      expect(getStartOfWeek('en-GB')).toBe(1);
    });

    it('provides correct mapping if language is matched', () => {
      expect(getStartOfWeek('ko')).toBe(0);
    });

    it('provides Sunday start date if no match is found', () => {
      expect(getStartOfWeek('invalid')).toBe(0);
    });

    it('provides Sunday start date if no locale is provided', () => {
      expect(getStartOfWeek()).toBe(0);
    });
  });
});
