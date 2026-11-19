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

interface IStyledHeader {
  $isExpanded?: boolean;
  $isCollapsible?: boolean;
  $hasRow?: boolean;
  $isWell?: boolean;
}

/* In the row layout the heading fills the row; `StyledHeaderRow` holds the
 * focus ring and the cursor rule. */
const rowStyles = () => css`
  flex: 1;
  min-width: 0;
`;

export const StyledHeader = styled.div<WithTheme<IStyledHeader>>`
  display: flex;
  align-items: center;
  transition: box-shadow 0.1s ease-in-out;
  font-size: ${props => props.theme.fontSizes.md};

  &:hover {
    cursor: ${props => !props.$hasRow && (props.$isCollapsible || !props.$isExpanded) && 'pointer'};
  }

  ${props =>
    !props.$hasRow &&
    focusStyles({
      theme: props.theme,
      inset: true,
      selector: `&:has(${StyledButton}:focus-visible)`
    })}

  ${props => props.$hasRow && rowStyles()}

  ${componentStyles};
`;
