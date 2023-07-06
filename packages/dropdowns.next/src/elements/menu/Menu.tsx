/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useMemo } from 'react';
import { IMenuProps } from '../../types';
import { MenuContext } from '../../context/useMenuContext';
import { StyledFloatingMenu, StyledMenu } from '../../views';

/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export const Menu = forwardRef<HTMLUListElement, IMenuProps>(
  ({ children, isCompact, ...props }, ref) => {
    const contextValue = useMemo(() => ({ isCompact }), [isCompact]);

    return (
      <MenuContext.Provider value={contextValue}>
        <StyledFloatingMenu position="bottom">
          <StyledMenu isCompact={isCompact} {...props} ref={ref}>
            {children}
          </StyledMenu>
        </StyledFloatingMenu>
      </MenuContext.Provider>
    );
  }
);

Menu.displayName = 'Menu';
