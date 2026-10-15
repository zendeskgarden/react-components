/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { focusStyles } from '../../theming/utils/focusStyles';
import { StyledButton } from './StyledButton';

interface IStyledHeader {
  $isExpanded?: boolean;
  $isCollapsible?: boolean;
}

export const StyledHeader = styled.div<IStyledHeader>`
  display: flex;
  align-items: center;
  transition: box-shadow 0.1s ease-in-out;
  font-size: ${props => props.theme.fontSizes.md};

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
