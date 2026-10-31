/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { WithTheme } from '../../types/views';
import { StyledPage } from './StyledPage';

export const StyledNavigation = styled(StyledPage)<WithTheme>`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: ${props => props.theme.iconSizes.md};
    height: ${props => props.theme.iconSizes.md};
  }

  ${componentStyles};
`;
