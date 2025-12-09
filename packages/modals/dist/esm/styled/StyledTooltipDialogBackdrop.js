/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { hideVisually } from '../node_modules/polished/dist/polished.esm.js';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$c = 'modals.tooltip_dialog.backdrop';
const StyledTooltipDialogBackdrop = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$c,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTooltipDialogBackdrop",
  componentId: "sc-zrk625-0"
})(["position:fixed;inset:0;z-index:400;overflow:hidden;-webkit-overflow-scrolling:touch;font-family:", ";direction:", ";&.garden-tooltip-modal-transition-exit-active{pointer-events:none;}&.garden-tooltip-modal-transition-exit-active div{transition:opacity 200ms;opacity:0;}", " ", ";"], props => props.theme.fonts.system, props => props.theme.rtl && 'rtl', props => props['aria-hidden'] && hideVisually(), componentStyles);

export { StyledTooltipDialogBackdrop };
