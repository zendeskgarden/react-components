/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { getColor } from '../../theming/utils/getColor';

export const StyledLine = styled.div`
  display: block;
  position: absolute;
  top: ${props => props.theme.space.base * 3}px;
  right: ${props => `calc(50% + ${props.theme.space.base * 6}px)`};
  left: ${props => `calc(-50% + ${props.theme.space.base * 6}px)`};
  flex: 1;
  border-top: ${props => props.theme.borders.sm};
  border-color: ${({ theme }) => getColor({ theme, variable: 'border.default' })};
`;
