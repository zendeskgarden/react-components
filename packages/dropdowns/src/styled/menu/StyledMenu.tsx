/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React, { HTMLAttributes } from 'react';
import styled, { keyframes, css, ThemeProps, DefaultTheme } from 'styled-components';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  getColor,
  arrowStyles
} from '@zendeskgarden/react-theming';
import { POPPER_PLACEMENT, getArrowPosition } from '../../utils/garden-placements';

const COMPONENT_ID = 'dropdowns.menu';

const ANIMATE_UP_KEYFRAME = keyframes`
  0% {
    margin-bottom: -${DEFAULT_THEME.space.base * 5}px;
  }

  100% {
    margin-bottom: 0;
  }
`;

const ANIMATE_RIGHT_KEYFRAME = keyframes`
  0% {
    margin-left: -${DEFAULT_THEME.space.base * 5}px;
  }

  100% {
    margin-left: 0;
  }
`;

const ANIMATE_DOWN_KEYFRAME = keyframes`
  0% {
    margin-top: -${DEFAULT_THEME.space.base * 5}px;
  }

  100% {
    margin-top: 0;
  }
`;

const ANIMATE_LEFT_KEYFRAME = keyframes`
  0% {
    margin-right: -${DEFAULT_THEME.space.base}px;
  }

  100% {
    margin-right: 0;
  }
`;

const shouldShowArrow = ({
  hasArrow,
  placement
}: {
  hasArrow?: boolean;
  placement?: POPPER_PLACEMENT;
}) => {
  return hasArrow && placement;
};

const retrieveMenuMargin = ({
  hasArrow,
  placement
}: {
  hasArrow?: boolean;
  placement?: POPPER_PLACEMENT;
}) => {
  const marginAmount = shouldShowArrow({ hasArrow, placement }) ? '8px' : '4px';

  switch (placement) {
    case 'bottom':
    case 'bottom-start':
    case 'bottom-end':
      return `margin-top: ${marginAmount};`;
    case 'top':
    case 'top-start':
    case 'top-end':
      return `margin-bottom: ${marginAmount};`;
    case 'left':
    case 'left-start':
    case 'left-end':
      return `margin-right: ${marginAmount};`;
    case 'right':
    case 'right-start':
    case 'right-end':
      return `margin-left: ${marginAmount};`;
    default:
      return '';
  }
};

const getArrowStyles = (props: IStyledMenuViewProps & ThemeProps<DefaultTheme>) => {
  if (!props.hasArrow || !props.placement || props.isHidden) {
    return undefined;
  }

  return arrowStyles(getArrowPosition(props.placement), {
    size: '8.457px',
    animationModifier: '.is-animated'
  });
};

const getAnimationStyles = (props: IStyledMenuViewProps & ThemeProps<DefaultTheme>) => {
  if (!props.isAnimated) {
    return undefined;
  }

  let animation = undefined;

  if (
    props.placement === 'top' ||
    props.placement === 'top-start' ||
    props.placement === 'top-end'
  ) {
    animation = ANIMATE_UP_KEYFRAME;
  } else if (
    props.placement === 'right' ||
    props.placement === 'right-start' ||
    props.placement === 'right-end'
  ) {
    animation = ANIMATE_RIGHT_KEYFRAME;
  } else if (
    props.placement === 'bottom' ||
    props.placement === 'bottom-start' ||
    props.placement === 'bottom-end'
  ) {
    animation = ANIMATE_DOWN_KEYFRAME;
  } else if (
    props.placement === 'left' ||
    props.placement === 'left-start' ||
    props.placement === 'left-end'
  ) {
    animation = ANIMATE_LEFT_KEYFRAME;
  }

  return css`
    animation: ${animation} 0.2s cubic-bezier(0.15, 0.85, 0.35, 1.2);
  `;
};

interface IStyledMenuViewProps extends HTMLAttributes<HTMLUListElement> {
  isCompact?: boolean;
  isAnimated?: boolean;
  isHidden?: boolean;
  hasArrow?: boolean;
  placement?: POPPER_PLACEMENT;
}

/**
 * 1. Positioned relative to controlling item.
 * 2. Opt out of browser default list margin.
 * 3. Prevent controlling item cursor inheritance.
 * 4. Opt out of browser default list padding.
 * 5. Prevent controlling item whitespace inheritance.
 */
const StyledMenuView = styled.ul.attrs<IStyledMenuViewProps>(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  className: props.isAnimated && 'is-animated'
}))<IStyledMenuViewProps>`
  display: ${props => props.isHidden && 'inline-block'};
  position: relative; /* [1] */
  transition: ${props => props.isHidden && 'opacity .2s ease-in-out, .2s visibility 0s linear'};
  visibility: ${props => props.isHidden && 'hidden'};
  opacity: ${props => props.isHidden && '0'};
  margin: 0; /* [2] */
  box-sizing: border-box;
  border: ${props => `${props.theme.borders.sm} ${getColor('neutralHue', 300, props.theme)}`};
  border-radius: ${props => props.theme.borderRadii.md};
  box-shadow: ${props =>
    props.theme.shadows.lg(
      `${props.theme.space.base * 5}px`,
      '30px',
      getColor('chromeHue', 600, props.theme, 0.15)!
    )};
  background-color: ${props => props.theme.colors.background};
  cursor: default; /* [3] */
  padding: 0; /* [4] */
  min-width: 180px;
  text-align: ${props => (props.theme.rtl ? 'right' : 'left')};
  white-space: normal; /* [5] */
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.theme.fontWeights.regular};
  direction: ${props => props.theme.rtl && 'rtl'};

  ${props => getAnimationStyles(props)};
  ${props => getArrowStyles(props)};

  :focus {
    outline: none;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledMenuView.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledMenuWrapperProps {
  hasArrow?: boolean;
  placement?: POPPER_PLACEMENT;
}

const StyledMenuWrapper = styled.div<IStyledMenuWrapperProps>`
  ${retrieveMenuMargin};
`;

StyledMenuWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledMaxHeightWrapper {
  maxHeight?: string;
}

const StyledMaxHeightWrapper = styled.div<IStyledMaxHeightWrapper>`
  ${props =>
    props.maxHeight &&
    `
  overflow-y: auto;
  max-height: ${props.maxHeight};
`}
`;

StyledMaxHeightWrapper.defaultProps = {
  theme: DEFAULT_THEME
};

export interface IStyledMenuProps extends HTMLAttributes<HTMLUListElement> {
  /**
   * All valid [Popper.JS Placements](https://popper.js.org/popper-documentation.html#Popper.placements)
   */
  placement?: POPPER_PLACEMENT;
  isAnimated?: boolean;
  isCompact?: boolean;
  isHidden?: boolean;
  hasArrow?: boolean;
  maxHeight?: string;
}

export const StyledMenu = React.forwardRef<HTMLDivElement, IStyledMenuProps>(
  ({ hasArrow, placement, maxHeight, children, ...other }, ref) => {
    return (
      <StyledMenuWrapper ref={ref} hasArrow={hasArrow} placement={placement}>
        <StyledMenuView hasArrow={hasArrow} placement={placement} {...other}>
          <StyledMaxHeightWrapper maxHeight={maxHeight}>{children}</StyledMaxHeightWrapper>
        </StyledMenuView>
      </StyledMenuWrapper>
    );
  }
);
