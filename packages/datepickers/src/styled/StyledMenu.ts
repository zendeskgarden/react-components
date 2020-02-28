/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.menu';

export const StyledMenu = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMenu.defaultProps = {
  theme: DEFAULT_THEME
};

/*
interface IStyledMenuProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements)
   *
  placement?: POPPER_PLACEMENT;
  isAnimated?: boolean;
  isCompact?: boolean;
  isHidden?: boolean;
  zIndex?: number;
}

export const StyledMenu = React.forwardRef<HTMLDivElement, IStyledMenuProps>(
  ({ placement, children, isHidden, isAnimated, zIndex, ...other }, ref) => {
    return (
      <StyledMenuWrapper
        placement={placement}
        isHidden={isHidden}
        isAnimated={isAnimated}
        zIndex={zIndex}
        ref={ref}
        {...other}
      >
        <StyledMenuView placement={placement} isAnimated={isAnimated}>
          {children}
        </StyledMenuView>
      </StyledMenuWrapper>
    );
  }
);

StyledMenu.displayName = 'StyledMenu';
*/
