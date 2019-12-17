/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useContext } from 'react';

interface INavContext {
  isExpanded: boolean;
  isLight: boolean;
  isDark: boolean;
}

export const NavContext = React.createContext<INavContext>({
  isExpanded: false,
  isLight: false,
  isDark: false
});

export const useNavContext = () => {
  return useContext(NavContext);
};
