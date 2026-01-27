/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor, StyledBaseIcon } from '@zendeskgarden/react-theming';
import styled, { css } from 'styled-components';

import type { IStyledAccordion } from '../../types/views';

const colorStyles = ({ $isCollapsible, $isHovered, $isRotated, theme }: IStyledAccordion) => {
  const showColor = $isCollapsible || !$isRotated;
  const color = getColor({
    theme,
    variable: showColor && $isHovered ? 'foreground.primary' : 'foreground.subtle'
  });

  return css`
    color: ${color};

    &:hover {
      color: ${showColor && color};
    }
  `;
};

const sizeStyles = ({ $isCompact, theme }: IStyledAccordion) => {
  const padding = $isCompact
    ? `${theme.space.base * 1.5}px ${theme.space.base * 3}px`
    : `${theme.space.base * 5}px`;
  const size = theme.iconSizes.md;

  return css`
    box-sizing: content-box;
    padding: ${padding};
    width: ${size};
    min-width: ${size};
    height: ${size};
  `;
};

export const StyledRotateIcon = styled(StyledBaseIcon)<IStyledAccordion>`
  transform: ${props => props.$isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`};
  transition:
    transform 0.25s ease-in-out,
    color 0.1s ease-in-out;
  vertical-align: middle;

  ${sizeStyles};
  ${colorStyles};

  ${componentStyles};
`;
