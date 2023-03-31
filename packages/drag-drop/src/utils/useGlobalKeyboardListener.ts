/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useDocument } from '@zendeskgarden/react-theming';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';

let listeners = 0;
let usingKeyboard = false;

export const useGlobalKeyboardListener = () => {
  const [isUsingKeyboard, setIsUsingKeyboard] = useState(usingKeyboard);
  const themeContext = useContext(ThemeContext);
  const environment = useDocument(themeContext);

  const setKeyboard = useCallback(
    (event: KeyboardEvent) => {
      if (
        !isUsingKeyboard &&
        ['Tab', ' ', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)
      ) {
        usingKeyboard = true;
        setIsUsingKeyboard(true);
      }
    },
    [isUsingKeyboard]
  );

  const setNoKeyboard = useCallback(() => {
    usingKeyboard = false;
    setIsUsingKeyboard(false);
  }, []);

  useEffect(() => {
    if (environment && listeners === 0) {
      listeners++;
      const win = environment.defaultView || window;

      win.addEventListener('keydown', setKeyboard, true);
      win.addEventListener('touchstart', setNoKeyboard, true);
      win.addEventListener('click', setNoKeyboard, true);
    }

    return () => {
      if (listeners > 0) listeners--;

      if (environment && listeners === 0) {
        const win = environment.defaultView || window;

        win.removeEventListener('keydown', setKeyboard, true);
        win.removeEventListener('touchstart', setNoKeyboard, true);
        win.removeEventListener('click', setNoKeyboard, true);
      }
    };
  }, [environment, setKeyboard, setNoKeyboard]);

  return isUsingKeyboard;
};
