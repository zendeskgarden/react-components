/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';
import { InputGroup } from '../../elements/input-group/InputGroup';
import { StyledInputGroup } from './StyledInputGroup';

export interface IStyledClearableInputProps {
  $isBare?: boolean;
}

/*
 * `&&` boosts specificity so this reliably overrides StyledInputGroup's own unified
 * border/background/focus-ring rules, regardless of stylesheet injection order.
 */
export const StyledClearableInput = styled(InputGroup)<IStyledClearableInputProps>`
  ${props =>
    props.$isBare &&
    css`
      &&${StyledInputGroup} {
        border: none;
        border-radius: 0;
        background-color: transparent;

        &:focus-within {
          box-shadow: none;
        }
      }
    `}
`;
