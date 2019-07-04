/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import defaultTheme from '.';
import palette from '../palette';

describe('defaultTheme', () => {
  it('does not include `palette.product`', () => {
    expect(defaultTheme.palette.product).toBeUndefined();
  });

  describe('palette', () => {
    it('does include `product`', () => {
      expect(palette.product).toBeDefined();
    });
  });
});
