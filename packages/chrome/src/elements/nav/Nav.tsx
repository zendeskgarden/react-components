/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import { useChromeContext } from '../../utils/useChromeContext';
import { NavContext } from '../../utils/useNavContext';
import { StyledNav } from '../../styled';

interface INavProps extends HTMLAttributes<HTMLElement> {
  /**
   * Expand navigation area to include item text
   **/
  isExpanded?: boolean;
}

/**
 * Accepts all `<nav>` attributes and events
 */
export const Nav = React.forwardRef<HTMLElement, INavProps>((props, ref) => {
  const { hue, isLight, isDark } = useChromeContext();
  const navContextValue = { isExpanded: !!props.isExpanded };

  return (
    <NavContext.Provider value={navContextValue}>
      <StyledNav ref={ref} {...props} hue={hue} isLight={isLight} isDark={isDark} />
    </NavContext.Provider>
  );
});

Nav.displayName = 'Nav';

Nav.propTypes = {
  isExpanded: PropTypes.bool
};
