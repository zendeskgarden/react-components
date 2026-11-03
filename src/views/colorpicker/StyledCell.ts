/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { WithTheme } from '../../types/views';

export const StyledCell = styled.td<WithTheme>`
  padding: ${props => props.theme.space.base}px;
  font-size: 0;

  ${componentStyles};
`;
