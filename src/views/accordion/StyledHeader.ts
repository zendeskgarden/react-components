/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { componentStyles, focusStyles } from '@zendeskgarden/react-theming';
import styled from 'styled-components';

import type { IStyledAccordion } from '../../types/views';

import { StyledButton } from './StyledButton';

export const StyledHeader = styled.div<IStyledAccordion>`
  display: flex;
  align-items: center;
  transition: box-shadow 0.1s ease-in-out;
  font-size: ${({ theme }) => theme.fontSizes.md};

  &:hover {
    cursor: ${props => (props.$isCollapsible || !props.$isExpanded) && 'pointer'};
  }

  ${props =>
    focusStyles({
      theme: props.theme,
      inset: true,
      selector: `&:has(${StyledButton}:focus-visible)`
    })}

  ${componentStyles};
`;
