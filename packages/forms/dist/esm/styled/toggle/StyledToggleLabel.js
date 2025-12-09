/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledCheckLabel } from '../checkbox/StyledCheckLabel.js';

const COMPONENT_ID$b = 'forms.toggle_label';
const sizeStyles$8 = props => {
  const size = props.theme.space.base * 10;
  const padding = size + props.theme.space.base * 2;
  return css(["padding-", ":", "px;&[hidden]{padding-", ":", "px;}"], props.theme.rtl ? 'right' : 'left', padding, props.theme.rtl ? 'right' : 'left', size);
};
const StyledToggleLabel = styled(StyledCheckLabel).attrs({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledToggleLabel",
  componentId: "sc-e0asdk-0"
})(["", ";", ";"], props => sizeStyles$8(props), componentStyles);

export { StyledToggleLabel };
