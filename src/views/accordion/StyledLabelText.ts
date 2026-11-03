/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import type { WithTheme } from '../../types/views';

interface IStyledLabelTextProps {
  $isHidden?: boolean;
  $isHorizontal?: boolean;
}

export const StyledLabelText = styled.div<WithTheme<IStyledLabelTextProps>>`
  display: ${props => props.$isHidden && 'none'};
  padding: ${props => props.$isHorizontal && `0 ${props.theme.space.base * 3}px`};
  overflow-wrap: ${props => props.$isHorizontal && 'break-word'};
`;
