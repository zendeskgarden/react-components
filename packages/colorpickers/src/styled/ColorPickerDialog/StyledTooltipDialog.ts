/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { TooltipDialog } from '@zendeskgarden/react-modals';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colordialog_tooltipdialog';

/**
 * 1. Override default TooltipDialog styling
 */
export const StyledTooltipDialog = styled(TooltipDialog as any).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable declaration-no-important */
  width: auto !important; /* [1] */
  /* stylelint-enable declaration-no-important */

  ${componentStyles};
`;
