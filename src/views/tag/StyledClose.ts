/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';

/**
 * 1. <button> element reset
 * 2. text content reset
 */

export const StyledClose = styled.button`
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  transition: opacity 0.25s ease-in-out;
  opacity: ${props => props.theme.opacity[1000]};
  border: 0; /* [1] */
  background: transparent; /* [1] */
  cursor: pointer;
  padding: 0; /* [1] */
  color: inherit; /* [1] */
  font-size: 0; /* [2] */
  appearance: none; /* [1] */

  svg {
    width: ${props => props.theme.iconSizes.sm};
    height: ${props => props.theme.iconSizes.sm};
  }

  &:hover {
    opacity: ${props => props.theme.opacity[1100]};
  }

  &:focus {
    outline: none;
  }

  &:active {
    opacity: ${props => props.theme.opacity[1200]};
  }

  ${componentStyles};
`;
