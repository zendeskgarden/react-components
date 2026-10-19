/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { getColor } from '../../theming/utils/getColor';

export const StyledDrawerFooter = styled.div`
  display: flex;
  flex-shrink: 0;
  justify-content: flex-end;
  border-top: ${({ theme }) =>
    `${theme.borders.sm} ${getColor({ theme, variable: 'border.subtle' })}`};
  padding: ${props => props.theme.space.base * 5}px;

  ${componentStyles};
`;
