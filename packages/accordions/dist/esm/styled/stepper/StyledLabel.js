/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getLineHeight, getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$e = 'accordions.step_label';
const StyledLabel = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$e,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledLabel",
  componentId: "sc-1o82llj-0"
})(["display:", ";align-items:", ";transition:color 0.25s ease-in-out,font-weight 0.25s ease-in-out;text-align:", ";line-height:", ";color:", ";font-size:", ";font-weight:", ";", ";"], props => !props.$isHorizontal && 'flex', props => !props.$isHorizontal && 'center', props => props.$isHorizontal && 'center', props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), ({
  $isActive,
  theme
}) => getColor({
  theme,
  variable: $isActive ? 'foreground.default' : 'foreground.subtle'
}), props => props.theme.fontSizes.md, props => props.$isActive && 600, componentStyles);

export { StyledLabel };
