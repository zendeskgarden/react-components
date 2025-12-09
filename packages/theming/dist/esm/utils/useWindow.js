/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import { useState, useEffect } from 'react';

const useWindow = theme => {
  const [controlledWindow, setControlledWindow] = useState();
  useEffect(() => {
    if (theme && theme.window) {
      setControlledWindow(theme.window);
    } else {
      setControlledWindow(window);
    }
  }, [theme]);
  return controlledWindow;
};

export { useWindow };
