/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled, css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { focusStyles } from '../../theming/utils/focusStyles';
import type { WithTheme } from '../../types/views';
import { StyledButton } from './StyledButton';

interface IStyledHeaderRow {
  $isWell?: boolean;
  $isExpanded?: boolean;
  $isCollapsible?: boolean;
}

/*
 * The radius is inset by the section border width, so the inset focus ring
 * follows the card shape.
 */
const wellStyles = ({ theme }: WithTheme<IStyledHeaderRow>) => css`
  border-radius: calc(${theme.borderRadii.xl} - ${theme.borderWidths.sm});
  min-height: calc(2 * ${theme.lineHeights.md} + 2 * ${theme.space.md});
`;

/*
 * Takes over `StyledHeader`'s focus ring, pointer cursor and `box-shadow`
 * transition whenever the row layout applies.
 */
export const StyledHeaderRow = styled.div<WithTheme<IStyledHeaderRow>>`
  display: flex;
  align-items: center;
  transition: box-shadow 0.1s ease-in-out;

  &:hover {
    cursor: ${props => (props.$isCollapsible || !props.$isExpanded) && 'pointer'};
  }

  ${props =>
    focusStyles({
      theme: props.theme,
      inset: true,
      selector: `&:has(${StyledButton}:focus-visible)`
    })}

  ${props => props.$isWell && wellStyles(props)}

  ${componentStyles};
`;
