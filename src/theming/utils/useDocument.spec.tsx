/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { renderHook } from '@testing-library/react-hooks';

import { useDocument } from './useDocument';

describe('useDocument()', () => {
  it('returns global document by default', () => {
    const { result } = renderHook(() => useDocument());

    expect(result.current).toBe(document);
  });

  it('returns themed document if provided', () => {
    const themedDocument = {};
    const { result } = renderHook(() => useDocument({ document: themedDocument }));

    expect(result.current).toBe(themedDocument);
  });
});
