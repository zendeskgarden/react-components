/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { styled } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import type { WithTheme } from '../../types/views';
import { StyledClose } from './StyledClose';

export const StyledTooltipDialogClose = styled(StyledClose)<WithTheme>`
  top: ${props => props.theme.space.base * 2.5}px;
  ${props => (props.theme.rtl ? 'left' : 'right')}: ${props => `${props.theme.space.base * 3}px`};
  ${componentStyles};
`;
