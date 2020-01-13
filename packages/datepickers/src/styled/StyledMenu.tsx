/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLProps } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { retrieveComponentStyles, isRtl, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import MenuStyles from '@zendeskgarden/css-menus';
import { POPPER_PLACEMENT } from '../elements/Datepicker/utils/garden-placements';

const COMPONENT_ID = 'dropdowns.menu';

const retrieveMenuMargin = ({ placement }: { placement?: POPPER_PLACEMENT }) => {
  const marginAmount = '4px';

  if (placement === 'bottom' || placement === 'bottom-start' || placement === 'bottom-end') {
    return `margin-top: ${marginAmount};`;
  }

  if (placement === 'top' || placement === 'top-start' || placement === 'top-end') {
    return `margin-bottom: ${marginAmount};`;
  }

  if (placement === 'left' || placement === 'left-start' || placement === 'left-end') {
    return `margin-right: ${marginAmount};`;
  }

  if (placement === 'right' || placement === 'right-start' || placement === 'right-end') {
    return `margin-left: ${marginAmount};`;
  }

  return '';
};

interface IStyledMenuViewProps extends HTMLProps<HTMLUListElement> {
  isCompact?: boolean;
  placement?: POPPER_PLACEMENT;
  animate?: boolean;
}

/**
 * Accepts all `<ul>` props
 */
const StyledMenuView = styled.ul.attrs<IStyledMenuViewProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: classNames(MenuStyles['c-menu'], {
    // Size
    [MenuStyles['c-menu--sm']]: props.isCompact,

    // Placement
    [MenuStyles['c-menu--up']]:
      props.placement === 'top' || props.placement === 'top-start' || props.placement === 'top-end',
    [MenuStyles['c-menu--right']]:
      props.placement === 'right' ||
      props.placement === 'right-start' ||
      props.placement === 'right-end',
    [MenuStyles['c-menu--left']]:
      props.placement === 'left' ||
      props.placement === 'left-start' ||
      props.placement === 'left-end',
    [MenuStyles['c-menu--down']]:
      props.placement === 'bottom' ||
      props.placement === 'bottom-start' ||
      props.placement === 'bottom-end',

    // State
    [MenuStyles['is-open']]: props.animate,
    [MenuStyles['is-hidden']]: props.hidden,

    // RTL
    [MenuStyles['is-rtl']]: isRtl(props)
  })
}))<IStyledMenuViewProps>`
  && {
    position: relative;
    padding: 0;
  }

  :focus {
    outline: none;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
` as React.FunctionComponent<IStyledMenuViewProps>;

interface IStyledMenuWrapperProps {
  placement?: POPPER_PLACEMENT;
}

const StyledMenuWrapper = styled.div<IStyledMenuWrapperProps>`
  ${retrieveMenuMargin};
`;

StyledMenuWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledMaxHeightWrapper extends HTMLProps<HTMLDivElement> {
  maxHeight?: string;
  height?: string;
}

const StyledMaxHeightWrapper = styled.div<IStyledMaxHeightWrapper>`
  ${props =>
    props.maxHeight &&
    !props.height &&
    `
  overflow-y: auto;
  max-height: ${props.maxHeight};
`}
`;

StyledMaxHeightWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledMenuProps extends HTMLProps<HTMLUListElement> {
  /**
   * All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements)
   */
  placement?: POPPER_PLACEMENT;
  animate?: boolean;
  isCompact?: boolean;
  hidden?: boolean;
  maxHeight?: string;
}

export const StyledMenu = React.forwardRef<any, IStyledMenuProps>(
  ({ placement, maxHeight, children, ...other }, ref) => {
    return (
      <StyledMenuWrapper placement={placement}>
        <StyledMenuView ref={ref} placement={placement} {...other}>
          <StyledMaxHeightWrapper maxHeight={maxHeight}>{children}</StyledMaxHeightWrapper>
        </StyledMenuView>
      </StyledMenuWrapper>
    );
  }
);
