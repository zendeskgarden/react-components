/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';
import { rgba } from 'polished';
import { ISplitterButtonProps, Orientation } from '../../types';
import { IconButton } from '@zendeskgarden/react-buttons';
import { StyledPaneSplitter } from './StyledPaneSplitter';

const COMPONENT_ID = 'pane.splitter_button';

interface IStyledSplitterButtonProps extends ISplitterButtonProps {
  orientation: Orientation;
}

const colorStyles = (props: ThemeProps<DefaultTheme>) => {
  const backgroundColor = getColor('background', 0, props.theme);
  const hoverColor = getColor('primaryHue', 100, props.theme);
  const focusRingColor = getColor('primaryHue', 300, props.theme);
  const activeColor = getColor('primaryHue', 300, props.theme);
  const boxShadow = props.theme.shadows.lg('4px', '8px', rgba(4, 68, 77, 0.15));
  const focusRingShadow = props.theme.shadows.md(focusRingColor!);

  return css`
    box-shadow: ${boxShadow};
    background-color: ${backgroundColor};

    &:hover {
      background-color: ${hoverColor};
    }

    &[data-garden-focus-visible] {
      box-shadow: ${boxShadow}, ${focusRingShadow};
    }

    &:active {
      background-color: ${activeColor};
    }
  `;
};

const sizeStyles = (props: IStyledSplitterButtonProps & ThemeProps<DefaultTheme>) => {
  const { base } = props.theme.space;
  const isHorizontal = props.orientation === 'top' || props.orientation === 'bottom';
  const isVertical = props.orientation === 'start' || props.orientation === 'end';
  const buttonDimension = base * 6;
  const defaultPosition = `${-base * 2 - 1}px`;
  let top;
  let left;
  let right;
  let bottom;

  if (isHorizontal) {
    switch (props.placement) {
      case 'start':
        top = defaultPosition;
        left = `${-base * 2}px`;
        break;
      case 'center':
        top = defaultPosition;
        left = `calc(50% - ${buttonDimension / 2}px)`;
        break;
      case 'end':
        top = defaultPosition;
        right = defaultPosition;
        break;
    }
  }
  if (isVertical) {
    switch (props.placement) {
      case 'start':
        top = `${base * 6}px`;
        left = `${-base * 2}px`;
        break;
      case 'center':
        top = `calc(50% - ${buttonDimension / 2}px)`;
        left = defaultPosition;
        break;
      case 'end':
        bottom = `${base * 6}px`;
        left = defaultPosition;
        break;
    }
  }

  return css`
    top: ${top};
    right: ${right};
    bottom: ${bottom};
    left: ${left};
    /* prettier-ignore */
    transition:
      box-shadow 0.1s ease-in-out,
      background-color 0.25s ease-in-out,
      opacity 0.25s ease-in-out;
    width: ${buttonDimension}px;
    min-width: ${buttonDimension}px;
    height: ${buttonDimension}px;
  `;
};

export const StyledPaneSplitterButton = styled(IconButton).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledSplitterButtonProps>`
  position: absolute;
  opacity: 0;

  ${StyledPaneSplitter}:hover &,
  &[data-garden-focus-visible] {
    opacity: 1;
  }

  ${sizeStyles}
  ${colorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledPaneSplitterButton.defaultProps = {
  theme: DEFAULT_THEME
};
