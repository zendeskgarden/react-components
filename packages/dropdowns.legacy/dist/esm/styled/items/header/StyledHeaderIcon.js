/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.header_icon';
const StyledHeaderIcon = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderIcon",
  componentId: "sc-ow8s45-0"
})(["display:flex;position:absolute;top:0;bottom:0;align-items:center;justify-content:center;", ":", "px;color:", ";& > *{width:", ";height:", ";}", ";"], props => props.theme.rtl ? 'right' : 'left', props => props.theme.space.base * 3, props => getColor({
  theme: props.theme,
  variable: 'foreground.subtle'
}), props => props.theme.iconSizes.md, props => props.theme.iconSizes.md, componentStyles);

export { StyledHeaderIcon };
