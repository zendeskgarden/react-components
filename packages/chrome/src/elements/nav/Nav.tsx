/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { INavProps } from '../../types';
import { useChromeContext } from '../../utils/useChromeContext';
import { NavContext } from '../../utils/useNavContext';
import { StyledNav } from '../../styled';
import { NavItem } from './NavItem';
import { NavItemIcon } from './NavItemIcon';
import { NavItemText } from './NavItemText';
import { NavList } from './NavList';

export const NavComponent = React.forwardRef<HTMLElement, INavProps>(
  ({ isExpanded, ...other }, ref) => {
    const { hue, isLight } = useChromeContext();
    const navContextValue = useMemo(() => ({ isExpanded: !!isExpanded }), [isExpanded]);

    return (
      <ThemeProvider
        theme={parentTheme => ({
          ...parentTheme,
          colors: { ...parentTheme.colors, base: isLight ? 'light' : 'dark' }
        })}
      >
        <NavContext.Provider value={navContextValue}>
          <StyledNav ref={ref} $isExpanded={isExpanded} $hue={hue} {...other} />
        </NavContext.Provider>
      </ThemeProvider>
    );
  }
);

NavComponent.displayName = 'Nav';

NavComponent.propTypes = {
  isExpanded: PropTypes.bool
};

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Nav = NavComponent as typeof NavComponent & {
  List: typeof NavList;
  Item: typeof NavItem;
  ItemIcon: typeof NavItemIcon;
  ItemText: typeof NavItemText;
};

Nav.List = NavList;
Nav.Item = NavItem;
Nav.ItemIcon = NavItemIcon;
Nav.ItemText = NavItemText;
