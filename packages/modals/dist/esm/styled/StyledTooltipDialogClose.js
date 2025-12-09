/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledClose } from './StyledClose.js';

const COMPONENT_ID$b = 'modals.tooltip_dialog.close';
const StyledTooltipDialogClose = styled(StyledClose).attrs({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltipDialogClose",
  componentId: "sc-18xlgfi-0"
})(["top:", "px;", ":", ";", ";"], props => props.theme.space.base * 3.5, props => props.theme.rtl ? 'left' : 'right', props => `${props.theme.space.base * 3}px`, componentStyles);

export { StyledTooltipDialogClose };
