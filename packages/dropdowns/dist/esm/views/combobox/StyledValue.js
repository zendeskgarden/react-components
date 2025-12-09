/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { sizeStyles } from './StyledInput.js';

const COMPONENT_ID$b = 'dropdowns.combobox.value';
const colorStyles$1 = ({
  theme,
  $isPlaceholder
}) => {
  const foregroundColor = $isPlaceholder && getColor({
    theme,
    variable: 'foreground.disabled'
  });
  return css(["color:", ";"], foregroundColor);
};
const StyledValue = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledValue",
  componentId: "sc-t719sx-0"
})(["flex-basis:0;flex-grow:1;cursor:", ";overflow:hidden;text-overflow:ellipsis;white-space:pre;user-select:none;", ";", ";&[hidden]{display:none;}", ";"], props => {
  if (props.$isDisabled) {
    return 'default';
  }
  return props.$isEditable && !props.$isAutocomplete ? 'text' : 'pointer';
}, sizeStyles, colorStyles$1, componentStyles);

export { StyledValue };
