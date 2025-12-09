/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useContext } from 'react';

const MenuContext = React__default.createContext(undefined);
const useMenuContext = () => {
  const menuContext = useContext(MenuContext);
  if (!menuContext) {
    throw new Error('This component must be rendered within a `Menu` component.');
  }
  return menuContext;
};

export { MenuContext, useMenuContext as default };
