/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';
import getLineHeight from '../../theming/utils/getLineHeight';
import type { WithTheme } from '../../types/views';

interface IStyledLabelProps {
  $isActive?: boolean;
  $isHorizontal?: boolean;
}

export const StyledLabel = styled.div<WithTheme<IStyledLabelProps>>`
  display: ${props => !props.$isHorizontal && 'flex'};
  align-items: ${props => !props.$isHorizontal && 'center'};
  transition:
    color 0.25s ease-in-out,
    font-weight 0.25s ease-in-out;
  text-align: ${props => props.$isHorizontal && 'center'};
  line-height: ${props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md)};
  color: ${({ $isActive, theme }) =>
    getColor({
      theme,
      variable: $isActive ? 'foreground.default' : 'foreground.subtle'
    })};
  font-size: ${props => props.theme.fontSizes.md};
  font-weight: ${props => props.$isActive && 600};

  ${componentStyles};
`;
