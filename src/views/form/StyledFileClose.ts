/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';

export const StyledFileClose = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  transition: opacity 0.25s ease-in-out;
  opacity: 0.8;
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${props => getColor({ theme: props.theme, variable: 'foreground.subtle' })};
  appearance: none;

  &:hover {
    opacity: 0.9;
  }

  &:focus {
    outline: none;
  }

  ${componentStyles};
`;
