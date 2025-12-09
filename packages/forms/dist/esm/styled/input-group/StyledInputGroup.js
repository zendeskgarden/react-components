/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledTextInput } from '../text/StyledTextInput.js';
import { StyledLabel } from '../common/StyledLabel.js';
import { StyledHint } from '../common/StyledHint.js';
import { StyledMessage } from '../common/StyledMessage.js';

const COMPONENT_ID$u = 'forms.input_group';
const positionStyles = props => {
  const topMargin = `${props.theme.space.base * (props.$isCompact ? 1 : 2)}px`;
  return css(["", ":not([hidden]) + &&,", " + &&,", " + &&,&& + ", ",&& + ", "{margin-top:", ";}& > ", "{position:relative;flex:1 1 auto;margin-top:0;margin-bottom:0;width:auto;min-width:0;}"], StyledLabel, StyledHint, StyledMessage, StyledHint, StyledMessage, topMargin, StyledTextInput);
};
const itemStyles = props => {
  const startDirection = props.theme.rtl ? 'right' : 'left';
  const endDirection = props.theme.rtl ? 'left' : 'right';
  return css(["& > *{z-index:-1;}& > ", "{z-index:0;}& > ", ":disabled{z-index:-2;}& > ", ":hover,& > button:hover,& > ", ":focus-visible,& > button:focus-visible,& > ", ":active,& > button:active,& > button[aria-pressed='true'],& > button[aria-pressed='mixed']{z-index:1;}& > button:disabled{border-top-width:0;border-bottom-width:0;}& > *:not(:first-child){margin-", ":-", ";}& > *:first-child:not(:last-child){border-top-", "-radius:0;border-bottom-", "-radius:0;}& > *:last-child:not(:first-child){border-top-", "-radius:0;border-bottom-", "-radius:0;}& > *:not(:first-child):not(:last-child){border-radius:0;}"], StyledTextInput, StyledTextInput, StyledTextInput, StyledTextInput, StyledTextInput, startDirection, props.theme.borderWidths.sm, endDirection, endDirection, startDirection, startDirection);
};
const StyledInputGroup = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$u,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledInputGroup",
  componentId: "sc-kjh1f0-0"
})(["display:inline-flex;position:relative;flex-wrap:nowrap;align-items:stretch;z-index:0;width:100%;", ";", ";", ";"], props => positionStyles(props), props => itemStyles(props), componentStyles);

export { StyledInputGroup };
