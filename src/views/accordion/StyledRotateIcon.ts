/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, getColor, StyledBaseIcon } from '@zendeskgarden/react-theming';
import styled, { css } from 'styled-components';

import type { IStyledAccordion } from '../../types/views';
import { StyledHeader } from './StyledHeader';
import { StyledLabel } from './StyledLabel';

const colorStyles = ({ $isCollapsible, theme }: IStyledAccordion) => {
  const color = getColor({ theme, variable: 'foreground.subtle' });
  const hoverColor = getColor({ theme, variable: 'foreground.primary' });

  return css`
    color: ${color};

    ${StyledHeader}:hover > & {
      color: ${hoverColor};
    }

    ${StyledHeader}:hover:has(${StyledLabel}[aria-expanded='true']) > & {
      color: ${$isCollapsible ? undefined : color};
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
  transition:
    transform 0.25s ease-in-out,
    color 0.1s ease-in-out;
  vertical-align: middle;

  ${StyledLabel}[aria-expanded='true'] ~ & {
    transform: rotate(${({ theme }) => (theme.rtl ? '-' : '+')}180deg);
  }

  ${sizeStyles};
  ${colorStyles};

  ${componentStyles};
`;
