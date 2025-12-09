/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { hideVisually } from 'polished';
import { getLineHeight, getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.input_label';
const StyledLabel = styled.label.attrs(props => ({
  'data-garden-id': props['data-garden-id'] || COMPONENT_ID,
  'data-garden-version': props['data-garden-version'] || '9.12.3'
})).withConfig({
  displayName: "StyledLabel",
  componentId: "sc-2utmsz-0"
})(["direction:", ";vertical-align:middle;line-height:", ";color:", ";font-size:", ";font-weight:", ";&[hidden]{display:", ";vertical-align:", ";text-indent:", ";font-size:", ";", ";}", ";"], props => props.theme.rtl && 'rtl', props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), props => getColor({
  theme: props.theme,
  variable: 'foreground.default'
}), props => props.theme.fontSizes.md, props => props.$isRegular ? props.theme.fontWeights.regular : props.theme.fontWeights.semibold, props => props.$isRadio ? 'inline-block' : 'inline', props => props.$isRadio && 'top', props => props.$isRadio && '-100%', props => props.$isRadio && '0', props => !props.$isRadio && hideVisually(), componentStyles);

export { StyledLabel };
