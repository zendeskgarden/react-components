/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { WithTheme } from '../../types/views';

/**
 * 1. <ol> reset.
 */
export const StyledBreadcrumb = styled.ol<WithTheme>`
  display: flex;
  margin: 0; /* [1] */
  padding: 0; /* [1] */
  list-style: none; /* [1] */
  font-size: ${props => props.theme.fontSizes.md};
  direction: ${props => props.theme.rtl && 'rtl'};

  ${componentStyles};
`;
