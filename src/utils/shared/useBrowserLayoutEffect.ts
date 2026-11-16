/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useEffect, useLayoutEffect } from 'react';

/* The layout effect in the browser; the passive effect on the server, where
 * the layout effect does nothing and React 18 warns about it. */
export const useBrowserLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;
