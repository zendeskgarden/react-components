/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tables.table';
const getLineHeight = props => {
  return `${props.theme.space.base * 5}px`;
};
const StyledTable = styled.table.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTable",
  componentId: "sc-gje7na-0"
})(["display:table;border:none;width:100%;table-layout:fixed;border-collapse:collapse;border-spacing:0;line-height:", ";color:", ";font-size:", ";direction:", ";", ";"], props => getLineHeight(props), props => getColor({
  variable: 'foreground.default',
  theme: props.theme
}), props => props.theme.fontSizes.md, props => props.theme.rtl && 'rtl', componentStyles);

export { StyledTable, getLineHeight };
