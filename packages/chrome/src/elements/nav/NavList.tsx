/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useMemo } from 'react';
import { StyledNavList } from '../../styled';
import { NavListContext } from '../../utils/useNavListContext';

/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export const NavList = React.forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(
  (props, ref) => {
    const contextValue = useMemo(() => ({ hasList: true }), []);

    return (
      <NavListContext.Provider value={contextValue}>
        <StyledNavList ref={ref} {...props} />
      </NavListContext.Provider>
    );
  }
);

NavList.displayName = 'Nav.List';
