/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker_slider_group';
const StyledSliderGroup = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSliderGroup",
  componentId: "sc-tigkzg-0"
})(["display:flex;justify-content:space-between;margin-bottom:", "px;", ";"], props => props.theme.space.base * 2, componentStyles);

export { StyledSliderGroup };
