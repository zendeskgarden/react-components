/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { rgba } from 'polished';
import {
  retrieveComponentStyles,
  DEFAULT_THEME,
  getColor,
  IGardenTheme,
  getLineHeight
} from '@zendeskgarden/react-theming';
import { StyledGrip } from './StyledGrip';

const COMPONENT_ID = 'draggable';

export interface IStyledDraggableProps extends ThemeProps<DefaultTheme> {
  focusInset?: boolean;
  isBare?: boolean;
  isCompact?: boolean;
  isDisabled?: boolean;
  isGrabbed?: boolean;
  isPlaceholder?: boolean;
}

export function getDragShadow(theme: IGardenTheme) {
  const { space, shadows } = theme;
  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const color = getColor('neutralHue', 600, theme, 0.35) as string;

  return shadows.lg(offsetY, blurRadius, color);
}

export function getFocusShadow(
  focusInset: IStyledDraggableProps['focusInset'],
  baseColor: string,
  theme: IGardenTheme
) {
  return `${focusInset ? 'inset ' : ''}${theme.shadows.md(rgba(baseColor as string, 0.35))}`;
}

const colorStyles = (props: IStyledDraggableProps) => {
  const { isBare, isGrabbed, isDisabled, isPlaceholder, focusInset, theme } = props;

  const baseColor = getColor('primaryHue', 600, theme);
  const dragShadow = getDragShadow(theme);
  const focusShadow = getFocusShadow(focusInset, baseColor!, theme);
  const baseBgColor = theme.colors.background;

  let color;
  let hoverBackgroundColor;
  let boxShadow;
  let focusBoxShadow;
  let borderColor = 'transparent';
  let backgroundColor = baseBgColor;

  if (isDisabled) {
    backgroundColor = getColor('neutralHue', 200, theme)!;
    color = getColor('neutralHue', 400, theme);
  } else if (isPlaceholder) {
    backgroundColor = getColor('neutralHue', 800, theme, 0.1)!;
  } else {
    color = theme.colors.foreground;
    borderColor = isBare ? 'transparent' : (getColor('neutralHue', 300, theme) as string);
    hoverBackgroundColor = isGrabbed ? baseBgColor : rgba(baseColor as string, 0.08);
    focusBoxShadow = isGrabbed ? `${focusShadow}, ${dragShadow}` : focusShadow;
    boxShadow = dragShadow;
  }

  return css`
    border-color: ${borderColor};
    background-color: ${backgroundColor};
    color: ${color};

    ${isGrabbed &&
    css`
      box-shadow: ${boxShadow};
    `}

    &:hover {
      background-color: ${hoverBackgroundColor};
    }

    &[data-garden-focus-visible] {
      box-shadow: ${focusBoxShadow};
    }
  `;
};

const cursorStyles = (props: IStyledDraggableProps) => {
  let cursor = props.isGrabbed ? 'grabbing' : 'grab';

  if (props.isDisabled || props.isPlaceholder) {
    cursor = 'default';
  }

  return css`
    cursor: ${cursor};
  `;
};

const sizeStyles = (props: IStyledDraggableProps) => {
  const { isCompact, theme } = props;
  const paddingDefault = theme.space.base * 2.25;
  const paddingCompact = theme.space.base * 1.25;

  /**
   * 1. Reset margin, e.g. when alternative tag includes native margin
   */
  return css`
    margin: 0; /* [1] */
    border-width: ${theme.borderWidths.sm};
    border-style: ${theme.borderStyles.solid};
    border-radius: ${theme.borderRadii.md};
    padding: ${isCompact ? `${paddingCompact}px ${paddingDefault}px` : `${paddingDefault}px`};
    line-height: ${getLineHeight(theme.space.base * 5, theme.fontSizes.md)};
    font-size: ${theme.fontSizes.md};
    font-weight: ${theme.fontWeights.regular};
  `;
};

export const StyledDraggable = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledDraggableProps>`
  display: flex;
  flex: 1;
  align-items: center;
  /* prettier-ignore */
  transition:
    border-color 0.25s ease-in-out,
    box-shadow 0.1s ease-in-out,
    background-color 0.25s ease-in-out,
    color 0.25s ease-in-out,
    z-index 0.25s ease-in-out;
  font-family: ${props => props.theme.fonts.system};
  direction: ${props => props.theme.rtl && 'rtl'};
  box-sizing: border-box;

  ${sizeStyles}

  &:focus {
    outline: none;
  }

  ${cursorStyles}
  ${colorStyles}

  > * {
    visibility: ${p => p.isPlaceholder && !p.isDisabled && 'hidden'};
  }

  > ${StyledGrip} {
    color: ${p => p.isDisabled && getColor('neutralHue', 400, p.theme)};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDraggable.defaultProps = {
  theme: DEFAULT_THEME
};
