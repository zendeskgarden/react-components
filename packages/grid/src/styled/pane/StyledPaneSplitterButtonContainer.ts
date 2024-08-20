/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math, stripUnit } from 'polished';
import { DEFAULT_THEME, getColor, retrieveComponentStyles } from '@zendeskgarden/react-theming';
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
  const backgroundColor = getColor({ theme, variable: 'background.raised' });
  const boxShadow = theme.shadows.lg(
    `${theme.space.base}px`,
    `${theme.space.base * 2}px`,
    getColor({ variable: 'shadow.small', theme })
  );

  return css`
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};
  `;
};

const positionStyles = ({
  theme,
  placement,
  splitterSize,
  orientation
}: IStyledSplitterButtonContainerProps & ThemeProps<DefaultTheme>) => {
  let top;
  let left;
  let right;
  let bottom;
  const size = getSize(theme);
  const inset = `-${size / 2}px`;

  if (placement === 'center' || splitterSize < size * 3) {
    const center = `${splitterSize / 2 - size / 2}px`;

    switch (`${orientation}-${theme.rtl ? 'rtl' : 'ltr'}`) {
      case 'top-ltr':
      case 'top-rtl':
        top = inset;
        left = center;
        break;

      case 'start-ltr':
      case 'end-rtl':
        top = center;
        left = inset;
        break;

      case 'end-ltr':
      case 'start-rtl':
        top = center;
        right = inset;
        break;

      case 'bottom-ltr':
      case 'bottom-rtl':
        bottom = inset;
        right = center;
        break;
    }
  } else {
    const offset = `${size}px`;

    /* istanbul ignore next */
    switch (`${orientation}-${placement}-${theme.rtl ? 'rtl' : 'ltr'}`) {
      case 'top-end-ltr':
      case 'top-end-rtl':
      case 'top-start-rtl':
        top = inset;
        right = offset;
        break;

      case 'bottom-end-ltr':
      case 'bottom-end-rtl':
      case 'bottom-start-rtl':
        bottom = inset;
        right = offset;
        break;

      case 'start-start-ltr':
      case 'end-start-rtl':
        top = offset;
        left = inset;
        break;

      case 'start-end-ltr':
      case 'end-end-rtl':
        bottom = offset;
        left = inset;
        break;

      case 'end-start-ltr':
      case 'start-start-rtl':
        top = offset;
        right = inset;
        break;

      case 'end-end-ltr':
      case 'start-end-rtl':
        bottom = offset;
        right = inset;
        break;

      case 'top-start-ltr':
        top = inset;
        left = offset;
        break;

      case 'bottom-start-ltr':
        bottom = inset;
        left = offset;
        break;
    }
  }

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
    border-radius: ${size}px;
    width: ${size}px;
    height: ${size}px;
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
