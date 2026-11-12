/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

describe('useBrowserLayoutEffect', () => {
  afterEach(() => {
    vi.unstubAllGlobals();
    vi.resetModules();
  });

  it('is the layout effect in the browser', async () => {
    const [{ useBrowserLayoutEffect }, react] = await Promise.all([
      import('./useBrowserLayoutEffect'),
      import('react')
    ]);

    expect(useBrowserLayoutEffect).toBe(react.useLayoutEffect);
  });

  it('is the passive effect without a window', async () => {
    vi.stubGlobal('window', undefined);
    vi.resetModules();

    const [{ useBrowserLayoutEffect }, react] = await Promise.all([
      import('./useBrowserLayoutEffect'),
      import('react')
    ]);

    expect(useBrowserLayoutEffect).toBe(react.useEffect);
  });
});
