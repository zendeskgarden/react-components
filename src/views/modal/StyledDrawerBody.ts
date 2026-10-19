/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import { StyledBody } from './StyledBody';

export const StyledDrawerBody = styled(StyledBody)`
  padding: ${props => props.theme.space.base * 5}px;
  color-scheme: only ${p => p.theme.colors.base};

  ${componentStyles};
`;
