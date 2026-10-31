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
 * Used for multi-line Notification content. Supports all `<p>` props
 */
export const StyledParagraph = styled.p<WithTheme>`
  margin: ${props => props.theme.space.base * 2}px 0 0;

  ${componentStyles};
`;
