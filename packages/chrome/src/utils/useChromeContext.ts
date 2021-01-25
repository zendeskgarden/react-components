/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';

interface IChromeContext {
  hue: string;
  isLight?: boolean;
  isDark?: boolean;
}

export const ChromeContext = React.createContext<IChromeContext>({
  hue: 'chromeHue'
});

export const useChromeContext = () => {
  return useContext(ChromeContext);
};
