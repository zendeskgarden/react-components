/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useChromeContext } from '../../utils/useChromeContext';
import { NavContext } from '../../utils/useNavContext';
import { StyledNav } from '../../styled';

interface INavProps extends HTMLAttributes<HTMLElement> {
  /** Expands the nav area to display the item text */
  isExpanded?: boolean;
}

/**
 * @extends HTMLAttributes<HTMLElement>
 */
export const Nav = React.forwardRef<HTMLElement, INavProps>((props, ref) => {
  const { hue, isLight, isDark } = useChromeContext();
  const navContextValue = useMemo(() => ({ isExpanded: !!props.isExpanded }), [props.isExpanded]);

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
