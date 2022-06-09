/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ISplitterButtonProps, Orientation, PLACEMENT } from '../../types';
import { ChevronButton } from '@zendeskgarden/react-buttons';
import { StyledPaneSplitter } from './StyledPaneSplitter';

const COMPONENT_ID = 'pane.splitter_button';

interface IStyledSplitterButtonProps extends ISplitterButtonProps {
  orientation: Orientation;
  placement: typeof PLACEMENT[number];
  isRotated: boolean;
}

const transformStyles = (props: IStyledSplitterButtonProps & ThemeProps<DefaultTheme>) => {
  let degrees = 0;

  if (props.isRotated) {
    degrees = props.theme.rtl ? -180 : 180;
  }

  if (props.orientation === 'end') {
    degrees += props.theme.rtl ? -90 : 90;
  } else if (props.orientation === 'start') {
    degrees += props.theme.rtl ? 90 : -90;
  } else if (props.orientation === 'bottom') {
    degrees += 180;
  }

  return css`
    & > svg {
      transform: rotate(${degrees}deg);
    }
  `;
};

const sizeStyles = (props: IStyledSplitterButtonProps & ThemeProps<DefaultTheme>) => {
  const size = `${props.theme.space.base * 6}px`;
  const isVertical = props.orientation === 'start' || props.orientation === 'end';
  let top;
  let left;
  let right;
  let bottom;

  if (props.placement === 'start') {
    if (isVertical) {
      top = size;
    } else if (props.theme.rtl) {
      right = size;
    } else {
      left = size;
    }
  } else if (props.placement === 'end') {
    if (isVertical) {
      bottom = size;
    } else if (props.theme.rtl) {
      left = size;
    } else {
      right = size;
    }
  }

  return css`
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
    width: ${size};
    min-width: ${size};
    height: ${size};
  `;
};

/**
 * 1. Opaque "dish" behind transparent button
 */
export const StyledPaneSplitterButton = styled(ChevronButton).attrs<IStyledSplitterButtonProps>({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION,
  isBasic: true,
  isPill: true,
  size: 'small'
})<IStyledSplitterButtonProps>`
  position: absolute;
  /* prettier-ignore */
  transition:
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    opacity 0.25s ease-in-out;
  opacity: 0;

  /* stylelint-disable selector-no-qualifying-type */
  &[data-garden-focus-visible],
  ${StyledPaneSplitter}:hover &,
  ${StyledPaneSplitter}[data-garden-focus-visible] & {
    opacity: 1;
  }

  ${sizeStyles};
  ${transformStyles};

  /* [1] */
  &::before {
    position: absolute;
    z-index: -1;
    background-color: ${props => props.theme.colors.background};
    width: 100%;
    height: 100%;
    content: '';
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPaneSplitterButton.defaultProps = {
  theme: DEFAULT_THEME
};
