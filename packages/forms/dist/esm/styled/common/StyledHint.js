/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getLineHeight, getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$C = 'forms.input_hint';
const StyledHint = styled.div.attrs(props => ({
  'data-garden-id': props['data-garden-id'] || COMPONENT_ID$C,
  'data-garden-version': props['data-garden-version'] || '9.12.3'
})).withConfig({
  displayName: "StyledHint",
  componentId: "sc-17c2wu8-0"
})(["direction:", ";display:block;vertical-align:middle;line-height:", ";color:", ";font-size:", ";", ";"], props => props.theme.rtl && 'rtl', props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), props => getColor({
  theme: props.theme,
  variable: 'foreground.subtle'
}), props => props.theme.fontSizes.md, componentStyles);

export { StyledHint };
