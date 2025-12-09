/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$l = 'colorpickers.colorpicker';
const getColorPickerWidth = props => {
  return props.$isOpaque ? 268 : 312;
};
const StyledColorPicker = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$l,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledColorPicker",
  componentId: "sc-gspq4q-0"
})(["width:", "px;min-width:", "px;", ";"], getColorPickerWidth, getColorPickerWidth, componentStyles);

export { StyledColorPicker, getColorPickerWidth };
