/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import DEFAULT_THEME from '../elements/theme';
import { getIconRenderSize } from './getIconRenderSize';

describe('getIconRenderSize', () => {
  it('returns the default render size', () => {
    expect(getIconRenderSize(DEFAULT_THEME)).toBe(DEFAULT_THEME.space.md);
  });

  it('returns the compact render size', () => {
    expect(getIconRenderSize(DEFAULT_THEME, true)).toBe(DEFAULT_THEME.iconSizes.md);
  });
});
