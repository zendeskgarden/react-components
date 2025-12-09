/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$7 = 'modals.tooltip_dialog.footer';
const StyledTooltipDialogFooter = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltipDialogFooter",
  componentId: "sc-kjomsm-0"
})(["display:flex;flex-shrink:0;align-items:center;justify-content:flex-end;padding-top:", "px;", ";"], p => p.theme.space.base * 5, componentStyles);

export { StyledTooltipDialogFooter };
