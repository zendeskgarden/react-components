/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { createRef } from 'react';

import { getElementRef } from './getElementRef';

describe('getElementRef', () => {
  afterEach(() => {
    vi.restoreAllMocks();
    vi.doUnmock('react');
    vi.resetModules();
  });

  it('returns the ref of an element', () => {
    const ref = createRef<HTMLButtonElement>();
    const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);

    expect(getElementRef(<button type="button" ref={ref} />)).toBe(ref);
    expect(error).not.toHaveBeenCalled();
  });

  it('returns a callback ref', () => {
    const ref = vi.fn();
    const error = vi.spyOn(console, 'error').mockImplementation(() => undefined);

    expect(getElementRef(<button type="button" ref={ref} />)).toBe(ref);
    expect(error).not.toHaveBeenCalled();
  });

  it('returns nothing for an element without a ref', () => {
    expect(getElementRef(<button type="button" />)).toBeFalsy();
  });

  it('reads `element.ref` before React 19', async () => {
    vi.resetModules();
    vi.doMock('react', async importOriginal => ({
      ...(await importOriginal<typeof import('react')>()),
      version: '18.3.1'
    }));
    // React 19 warns when `element.ref` is read; that read is what React 18 needs
    vi.spyOn(console, 'error').mockImplementation(() => undefined);

    const { getElementRef: getElementRef18 } = await import('./getElementRef');
    const ref = createRef<HTMLButtonElement>();

    expect(getElementRef18(<button type="button" ref={ref} />)).toBe(ref);
  });
});
