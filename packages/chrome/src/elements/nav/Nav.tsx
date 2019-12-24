/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useMemo } from 'react';
import PropTypes from 'prop-types';
import readableColor from 'polished/lib/color/readableColor';
import { NavContext } from '../../utils/useNavContext';
import { StyledNav, IStyledNavProps } from '../../styled';

interface INavProps
  extends Omit<Omit<IStyledNavProps, 'isLight'>, 'isDark'>,
    HTMLAttributes<HTMLElement> {
  backgroundColor?: string;
}

/**
 * Accepts all `<nav>` attributes and events
 */
export const Nav = React.forwardRef<HTMLElement, INavProps>(
  ({ backgroundColor, style, ...props }, ref) => {
    const isLightComputed = useMemo(() => {
      if (!backgroundColor) {
        return false;
      }

      const LIGHT_VALUE = 'white';

      const accessibleColor = readableColor(backgroundColor, LIGHT_VALUE);

      return accessibleColor === LIGHT_VALUE;
    }, [backgroundColor]);

    const isLight = backgroundColor ? isLightComputed : false;
    const isDark = backgroundColor ? !isLightComputed : false;

    const navContextValue = { isExpanded: !!props.isExpanded, isLight, isDark };

    return (
      <NavContext.Provider value={navContextValue}>
        <StyledNav
          ref={ref}
          {...props}
          isLight={isLight}
          isDark={isDark}
          data-test-light={isLight}
          data-test-dark={isDark}
          style={{ ...style, backgroundColor }}
        />
      </NavContext.Provider>
    );
  }
);

Nav.propTypes = {
  isExpanded: PropTypes.bool,
  backgroundColor: PropTypes.string
};
