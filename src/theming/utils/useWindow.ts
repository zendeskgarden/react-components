/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useState, useEffect } from 'react';
import { DefaultTheme } from 'styled-components';

export const useWindow = (theme?: Partial<DefaultTheme>) => {
  const [controlledWindow, setControlledWindow] = useState<Window>();

  /**
   * Only reference `window` after initial render to support SSR environments
   */
  useEffect(() => {
    if (theme && theme.window) {
      setControlledWindow(theme.window);
    } else {
      setControlledWindow(window);
    }
  }, [theme]);

  return controlledWindow;
};
