/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { StyledDatePicker } from './StyledDatePicker.js';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.range_calendar';
const StyledRangeCalendar = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledRangeCalendar",
  componentId: "sc-1og46sy-0"
})(["display:flex;overflow:auto;", "{margin:0;", "}", ";"], StyledDatePicker, props => props.theme.rtl ? `&:last-of-type {margin-right: ${props.theme.space.base * 5}px}` : `&:first-of-type {margin-right: ${props.theme.space.base * 5}px}`, componentStyles);

export { StyledRangeCalendar };
