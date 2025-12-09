/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$4 = 'datepickers.calendar';
const StyledCalendar = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCalendar",
  componentId: "sc-g5hoe8-0"
})(["width:", "px;", ";"], props => props.$isCompact ? props.theme.space.base * 56 : props.theme.space.base * 70, componentStyles);

export { StyledCalendar };
