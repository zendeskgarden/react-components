/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import DEFAULT_THEME from '.';

describe('DEFAULT_THEME', () => {
  it('matches snapshot', () => {
    expect(DEFAULT_THEME).toMatchSnapshot();
  });

  it('does not include `PALETTE.product`', () => {
    expect(DEFAULT_THEME.palette.product).toBeUndefined();
  });
});
