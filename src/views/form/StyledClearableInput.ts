/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css } from 'styled-components';

import { InputGroup } from '../../elements/form/InputGroup';
import type { IStyledClearableInputProps } from '../../types/views';
import { StyledInputGroup } from './StyledInputGroup';

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
