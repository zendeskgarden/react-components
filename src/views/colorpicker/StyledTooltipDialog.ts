/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';

import { TooltipDialog } from '../../elements/modal/TooltipDialog';
import { componentStyles } from '../../theming/utils/componentStyles';

/**
 * 1. Override default TooltipDialog styling
 */
export const StyledTooltipDialog = styled(TooltipDialog as any)`
  /* stylelint-disable declaration-no-important */
  width: auto !important; /* [1] */
  /* stylelint-enable declaration-no-important */

  ${componentStyles};
`;
