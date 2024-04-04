/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math, stripUnit } from 'polished';
import { DEFAULT_THEME, getColorV8, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledPaneSplitter } from './StyledPaneSplitter';
import { getSize } from './StyledPaneSplitterButton';
import { Orientation, PLACEMENT } from '../../types';

const COMPONENT_ID = 'pane.splitter_button_container';

interface IStyledSplitterButtonContainerProps {
  orientation: Orientation;
  placement: (typeof PLACEMENT)[number];
  splitterSize: number;
}

const colorStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const backgroundColor = getColorV8('background', 600 /* default shade */, theme);
  const boxShadow = theme.shadows.lg(
    `${theme.space.base}px`,
    `${theme.space.base * 2}px`,
    getColorV8('chromeHue', 600, theme, 0.15)!
  );

  return css`
    background-color: ${backgroundColor};
    box-shadow: ${boxShadow};
  `;
};

const positionStyles = (props: IStyledSplitterButtonContainerProps & ThemeProps<DefaultTheme>) => {
  let top;
  let left;
  let right;
  let bottom;
  const size = getSize(props.theme);

  if (props.splitterSize >= size * 3) {
    const isVertical = props.orientation === 'start' || props.orientation === 'end';
    const offset = `${size}px`;
    const inset = `-${size / 2}px`;

    switch (`${props.orientation}-${props.placement}-${props.theme.rtl ? 'rtl' : 'ltr'}`) {
      case 'start-start-ltr':
      case 'end-start-rtl':
        top = offset;
        left = inset;
        break;

      case 'end-start-ltr':
      case 'start-start-rtl':
        top = offset;
        right = inset;
        break;

      case 'top-start-ltr':
        top = inset;
        left = offset;
        break;

      case 'top-end-ltr':
      case 'top-end-rtl':
      case 'top-start-rtl':
        top = inset;
        right = offset;
        break;

      case 'bottom-start-ltr':
        bottom = inset;
        left = offset;
        break;

      case 'bottom-end-ltr':
      case 'bottom-end-rtl':
      case 'bottom-start-rtl':
        bottom = inset;
        right = offset;
        break;

      case 'start-end-ltr':
      case 'end-end-rtl':
        bottom = offset;
        left = inset;
        break;

      case 'end-end-ltr':
      case 'start-end-rtl':
        bottom = offset;
        right = inset;
        break;
    }
  } else {
    // position on center
  }

  // if (props.splitterSize >= _size * 3) {
  //   const position = `${_size / 2}px`;

  //   if (props.placement === 'start') {
  //     if (isVertical) {
  //       top = size;

  //       if (props.theme.rtl) {
  //         left = `-${position}`;
  //       } else {
  //         right = `-${position}`;
  //       }
  //     } else if (props.theme.rtl) {
  //       right = size;
  //     } else {
  //       left = size;
  //     }
  //   } else if (props.placement === 'end') {
  //     if (isVertical) {
  //       bottom = size;
  //     } else if (props.theme.rtl) {
  //       left = size;
  //     } else {
  //       right = size;
  //     }
  //   } /* center */ else {
  //     const center = `${props.splitterSize / 2 - _size / 2}px`;

  //     if (isVertical) {
  //       //
  //     } else {
  //       top = `-${_size / 2}px`;
  //       left = center;
  //     }
  //   }
  // }

  return css`
    /* stylelint-disable declaration-block-no-redundant-longhand-properties */
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
  `;
};

const sizeStyles = ({ theme }: ThemeProps<DefaultTheme>) => {
  const size = getSize(theme);

  return css`
    width: ${size}px;
    height: ${size}px;
    border-radius: ${size}px;
  `;
};

const minimumSplitterSize = (theme: DefaultTheme) =>
  stripUnit(math(`${theme.shadowWidths.md} * 2 + ${getSize(theme)}`)) as number;

/**
 * 1. Match focused `Splitter` z-index
 */
export const StyledPaneSplitterButtonContainer = styled.div<IStyledSplitterButtonContainerProps>`
  display: ${props =>
    props.splitterSize <= minimumSplitterSize(props.theme) ? 'none' : undefined};
  position: absolute;
  /* prettier-ignore */
  transition:
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    opacity 0.25s ease-in-out 0.1s;
  opacity: 0;
  z-index: 2; /* [1] */

  ${positionStyles};

  ${sizeStyles};

  ${colorStyles};

  &:hover,
  &:focus-within,
  /* stylelint-disable selector-no-qualifying-type */
  ${StyledPaneSplitter}:hover ~ &,
  ${StyledPaneSplitter}:focus-visible ~ & {
    opacity: 1;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPaneSplitterButtonContainer.defaultProps = {
  theme: DEFAULT_THEME
};
