/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useMemo } from 'react';
import PropTypes from 'prop-types';
import readableColor from 'polished/lib/color/readableColor';
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
export const Nav = React.forwardRef<HTMLElement, INavProps>(({ style, ...props }, ref) => {
  const { hue } = useChromeContext();
  const isLightComputed = useMemo(() => {
    if (!hue) {
      return false;
    }

    const LIGHT_VALUE = 'white';
    const accessibleColor = readableColor(hue, LIGHT_VALUE);

    return accessibleColor === LIGHT_VALUE;
  }, [hue]);

  const isLight = hue ? isLightComputed : false;
  const isDark = hue ? !isLightComputed : false;

  const navContextValue = { isExpanded: !!props.isExpanded, isLight, isDark };

  return (
    <NavContext.Provider value={navContextValue}>
      <StyledNav
        ref={ref}
        {...props}
        hue={hue}
        data-test-light={isLight}
        data-test-dark={isDark}
        style={{ ...style }}
      />
    </NavContext.Provider>
  );
});

Nav.propTypes = {
  isExpanded: PropTypes.bool
};
