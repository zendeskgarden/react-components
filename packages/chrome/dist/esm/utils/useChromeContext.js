/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useContext } from 'react';

const ChromeContext = React__default.createContext({
  hue: 'chromeHue'
});
const useChromeContext = () => {
  return useContext(ChromeContext);
};

export { ChromeContext, useChromeContext };
