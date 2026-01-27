/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor, getLineHeight } from '@zendeskgarden/react-theming';
import styled, { css } from 'styled-components';

import type { IStyledAccordion } from '../../types/views';

const colorStyles = ({ $isCollapsible, $isExpanded, $isHovered, theme }: IStyledAccordion) => {
  const showColor = $isCollapsible || !$isExpanded;
  const color = getColor({
    theme,
    variable: showColor && $isHovered ? 'foreground.primary' : 'foreground.default'
  });

  return css`
    background: transparent;
    color: ${color};

    &:hover {
      cursor: ${showColor && 'pointer'};
      color: ${showColor && color};
    }
  `;
};

const sizeStyles = ({ $isCompact, theme }: IStyledAccordion) => {
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(theme.space.base * 5, fontSize);
  const padding = $isCompact
    ? `${theme.space.base * 2}px ${theme.space.base * 3}px`
    : `${theme.space.base * 5}px`;

  return css`
    padding: ${padding};
    width: 100%;
    line-height: ${lineHeight};
    font-size: ${fontSize};
  `;
};

/**
 * 1. <button> override.
 * 2. Remove dotted outline from Firefox on focus.
 */
export const StyledButton = styled.button<IStyledAccordion>`
  transition: color 0.1s ease-in-out;
  outline: none;
  border: none;
  text-align: ${({ theme }) => (theme.rtl ? 'right' : 'left')};
  font-family: inherit; /* [1] */
  font-weight: ${({ theme }) => theme.fontWeights.semibold};

  ${sizeStyles};
  ${colorStyles};

  &::-moz-focus-inner {
    border: 0; /* [2] */
  }

  &:hover {
    cursor: ${props => (props.$isCollapsible || !props.$isExpanded) && 'pointer'};
  }

  ${componentStyles};
`;
