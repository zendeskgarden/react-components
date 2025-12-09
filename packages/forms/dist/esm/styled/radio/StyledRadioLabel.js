/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledLabel } from '../common/StyledLabel.js';

const COMPONENT_ID$t = 'forms.radio_label';
const sizeStyles$d = props => {
  const size = props.theme.space.base * 4;
  const padding = size + props.theme.space.base * 2;
  const lineHeight = props.theme.space.base * 5;
  return css(["padding-", ":", "px;&[hidden]{padding-", ":", "px;line-height:", "px;}"], props.theme.rtl ? 'right' : 'left', padding, props.theme.rtl ? 'right' : 'left', size, lineHeight);
};
const StyledRadioLabel = styled(StyledLabel).attrs({
  'data-garden-id': COMPONENT_ID$t,
  'data-garden-version': '9.12.3',
  $isRadio: true
}).withConfig({
  displayName: "StyledRadioLabel",
  componentId: "sc-1aq2e5t-0"
})(["display:inline-block;position:relative;cursor:pointer;", ";", ";"], props => sizeStyles$d(props), componentStyles);

export { StyledRadioLabel };
