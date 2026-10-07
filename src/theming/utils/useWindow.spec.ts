/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { renderHook } from '@testing-library/react-hooks';

import { useWindow } from './useWindow';

describe('useWindow()', () => {
  it('returns global window by default', () => {
    const { result } = renderHook(() => useWindow());

    expect(result.current).toBe(window);
  });

  it('returns themed window if provided', () => {
    const themedWindow = {};
    const { result } = renderHook(() => useWindow({ window: themedWindow }));

    expect(result.current).toBe(themedWindow);
  });
});
