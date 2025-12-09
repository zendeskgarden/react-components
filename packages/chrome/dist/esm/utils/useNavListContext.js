/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import React__default, { useContext } from 'react';

const NavListContext = React__default.createContext(undefined);
const useNavListContext = () => {
  return useContext(NavListContext);
};

export { NavListContext, useNavListContext };
