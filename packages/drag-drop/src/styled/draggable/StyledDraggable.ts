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
  focusInset?: boolean;
  isCompact?: boolean;
  isBare?: boolean;
  isDisabled?: boolean;
  isPlaceholder?: boolean;
  isGrabbed?: boolean;
}

function getDragShadow(props: IStyledDraggableProps) {
  const { theme } = props;
  const { space, shadows } = theme;
  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const color = getColor('neutralHue', 600, theme, 0.35) as string;

  return shadows.lg(offsetY, blurRadius, color);
}

function getColorStyles(props: IStyledDraggableProps) {
  const { isBare, isGrabbed, isDisabled, isPlaceholder, focusInset, theme } = props;

  const shade = 600;
  const baseColor = getColor('primaryHue', shade, theme);
  const focusShadow = `
    ${focusInset ? 'inset' : ''}
    ${theme.shadows.md(rgba(baseColor as string, 0.35))}`;
  const dragShadow = getDragShadow(props);

  if (isDisabled) {
    return css`
      background-color: ${p => getColor('neutralHue', 200, p.theme)};

      > * {
        color: ${p => getColor('neutralHue', 400, p.theme)};
      }
    `;
  }

  if (isPlaceholder) {
    return css`
      background-color: ${p => getColor('neutralHue', 200, p.theme)};

      > * {
        visibility: hidden;
      }
    `;
  }

  return css`
    border-color: ${p => (isBare ? 'transparent' : getColor('neutralHue', 300, p.theme))};
    background-color: ${p => p.theme.colors.background};

    ${isGrabbed &&
    css`
      box-shadow: ${dragShadow};
    `}

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: ${p =>
        isGrabbed ? p.theme.colors.background : getColor('primaryHue', shade, p.theme, 0.08)};
    }

    &[data-garden-focus-visible] {
      box-shadow: ${isGrabbed ? `${focusShadow}, ${dragShadow}` : focusShadow};
    }
  `;
}

function getCursorStyles(props: IStyledDraggableProps) {
  if (props.isDisabled || props.isPlaceholder) {
    return css`
      cursor: not-allowed;
    `;
  }

  return css`
    cursor: ${props.isGrabbed ? 'grabbing' : 'grab'};
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
  box-sizing: border-box;

  ${getCursorStyles}
  ${getColorStyles}

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDraggable.defaultProps = {
  theme: DEFAULT_THEME
};
