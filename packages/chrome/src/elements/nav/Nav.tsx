/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes, useMemo } from 'react';
import PropTypes from 'prop-types';
import getLuminance from 'polished/lib/color/getLuminance';
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

      /**
       * We are unable to use the `readableColor()` utility
       * as some styling logic requires boolean logic.
       */
      const colorLuminance = getLuminance(backgroundColor);

      if (colorLuminance && colorLuminance > 0.179) {
        return true;
      }

      return false;
    }, [backgroundColor]);

    const isLight = backgroundColor ? isLightComputed : false;
    const isDark = backgroundColor ? !isLightComputed : false;

    return (
      <NavContext.Provider value={{ isExpanded: !!props.isExpanded }}>
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
