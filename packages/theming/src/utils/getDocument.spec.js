/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import getDocument from './getDocument';

describe('getDocument', () => {
  const doc = {};

  it('returns document if theme has document prop passed', () => {
    expect(
      getDocument({
        theme: {
          document: doc
        }
      })
    ).toBe(doc);
  });

  it('returns undefined if theme has no document prop passed', () => {
    expect(
      getDocument({
        theme: {}
      })
    ).toBeUndefined();
  });

  it('returns undefined if no theme is provided', () => {
    expect(getDocument({})).toBeUndefined();
  });

  it('returns undefined if no props are provided', () => {
    expect(getDocument()).toBeUndefined();
  });
});
