/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { TooltipDialog } from '@zendeskgarden/react-modals';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colordialog_tooltipdialog_body';
const StyledTooltipBody = styled(TooltipDialog.Body).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltipBody",
  componentId: "sc-1ueddpo-0"
})(["padding:0;", ";"], componentStyles);

export { StyledTooltipBody };
