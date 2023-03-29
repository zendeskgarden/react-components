/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme, css } from 'styled-components';
import { rgba } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'draggable';

export interface IStyledDraggableProps extends ThemeProps<DefaultTheme> {
  isCompact?: boolean;
  isBare?: boolean;
  isDisabled?: boolean;
  isPlaceholder?: boolean;
  focusInset?: boolean;
  isActive?: boolean;
  isDragging?: boolean;
}

function getShadow(props: IStyledDraggableProps) {
  const { theme } = props;
  const { space, shadows } = theme;
  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const color = getColor('neutralHue', 800, theme, 0.35);

  return css`
    box-shadow: ${shadows.lg(offsetY, blurRadius, color as string)};

    &:focus {
      outline: none;
    }
  `;
}

function getColorStyles(props: IStyledDraggableProps) {
  const { isBare } = props;

  const shade = 600;
  const baseColor = getColor('primaryHue', shade, props.theme);
  const boxShadowColor = props.focusInset && props.isActive ? props.theme.palette.white : baseColor;
  const boxShadow = `
    ${props.focusInset ? 'inset' : ''}
    ${props.theme.shadows.md(rgba(boxShadowColor as string, 0.35))}`;

  const pseudoClassStyles = css`
    &:focus {
      outline: none;
    }

    &:hover {
      background-color: ${p => getColor('primaryHue', shade, p.theme, 0.08)};
    }

    &[data-garden-focus-visible] {
      box-shadow: ${boxShadow};
    }
  `;

  if (props.isDisabled) {
    return css`
      background-color: ${p => getColor('neutralHue', 200, p.theme)};

      > * {
        color: ${p => getColor('neutralHue', 400, p.theme)};
      }
    `;
  }

  if (props.isPlaceholder) {
    return css`
      background-color: ${p => getColor('neutralHue', 200, p.theme)};

      > * {
        visibility: hidden;
      }
    `;
  }

  /**
   * 1. Subtract 1px from padding for the additional border-width.
   * 2. Drag shadow overrides focus shadow.
   */
  if (props.isActive) {
    return css`
      border-width: 2px;
      border-color: ${p => (isBare ? 'transparent' : getColor('primaryHue', shade, p.theme))};
      background-color: ${p => p.theme.colors.background};
      /* prettier-ignore */
      padding: calc(${p =>
        props.isCompact ? p.theme.space.base * 1.25 : p.theme.space.base * 2.25}px - 1px); /* [1] */

      ${pseudoClassStyles}
    `;
  }

  return css`
    border-color: ${p => (isBare ? 'transparent' : getColor('neutralHue', 300, p.theme))};
    background-color: ${p => p.theme.colors.background};

    ${props.isDragging ? getShadow : pseudoClassStyles}/* [2] */
  `;
}

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
  border-width: ${p => p.theme.borderWidths.sm};
  border-style: ${p => p.theme.borderStyles.solid};
  border-radius: ${p => p.theme.borderRadii.md};
  border-color: transparent;
  padding: ${p => (p.isCompact ? p.theme.space.base * 1.25 : p.theme.space.base * 2.25)}px;
  color: ${p => p.theme.colors.foreground};

  ${getColorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDraggable.defaultProps = {
  theme: DEFAULT_THEME
};
