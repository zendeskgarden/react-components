/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { TooltipDialog } from '@zendeskgarden/react-modals';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$6 = 'colorpickers.colordialog_tooltipdialog';
const StyledTooltipDialog = styled(TooltipDialog).attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltipDialog",
  componentId: "sc-1vbkccl-0"
})(["width:auto !important;", ";"], componentStyles);

export { StyledTooltipDialog };
