/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import SvgAlertErrorStroke from '../packages/modals/node_modules/@zendeskgarden/svg-icons/src/16/alert-error-stroke.svg.js';

const StyledDangerIcon = styled(SvgAlertErrorStroke).withConfig({
  displayName: "StyledDangerIcon",
  componentId: "sc-1kwbb39-0"
})(["position:absolute;top:", "px;", ":", ";"], props => props.theme.space.base * 5.5, props => props.theme.rtl ? 'right' : 'left', props => `${props.theme.space.base * 4}px`);

export { StyledDangerIcon };
