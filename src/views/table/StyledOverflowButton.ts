/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { WithTheme } from '../../types/views';
import { StyledIconButton } from '../button/StyledIconButton';

const OVERFLOW_BUTTON_SIZE = '2em';

/**
 * 1. Overrides IconButton sizing
 */
export const StyledOverflowButton = styled(StyledIconButton)<WithTheme>`
  width: 100%; /* [1] */
  min-width: unset; /* [1] */
  height: ${OVERFLOW_BUTTON_SIZE}; /* [1] */
  font-size: inherit;

  ${componentStyles};
`;
