/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { forwardRef, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { IMenuProps, PLACEMENT } from '../../types';
import { MenuContext } from '../../context/useMenuContext';
import { StyledFloatingMenu, StyledMenu } from '../../views';
import { toArrowPosition, toFloatingPlacement, toMenuPosition } from './utils';

/**
 * @extends HTMLAttributes<HTMLUListElement>
 */
export const Menu = forwardRef<HTMLUListElement, IMenuProps>(
  ({ children, hasArrow, isCompact, maxHeight, minHeight, placement, zIndex, ...props }, ref) => {
    const contextValue = useMemo(() => ({ isCompact }), [isCompact]);
    const theme = useContext(ThemeContext) || DEFAULT_THEME;
    const floatingPlacement = toFloatingPlacement(theme.rtl, placement);

    return (
      <MenuContext.Provider value={contextValue}>
        <StyledFloatingMenu
          data-garden-animate="true"
          position={toMenuPosition(floatingPlacement)}
          zIndex={zIndex}
        >
          <StyledMenu
            arrowPosition={hasArrow ? toArrowPosition(floatingPlacement) : undefined}
            isCompact={isCompact}
            minHeight={minHeight}
            maxHeight={maxHeight}
            {...props}
            ref={ref}
          >
            {children}
          </StyledMenu>
        </StyledFloatingMenu>
      </MenuContext.Provider>
    );
  }
);

Menu.displayName = 'Menu';

Menu.propTypes = {
  hasArrow: PropTypes.bool,
  isCompact: PropTypes.bool,
  maxHeight: PropTypes.string,
  minHeight: PropTypes.string,
  placement: PropTypes.oneOf(PLACEMENT),
  zIndex: PropTypes.number
};

Menu.defaultProps = {
  maxHeight: '400px',
  placement: 'bottom-start',
  zIndex: 1000
};
