/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$a = 'colorpickers.colorpicker_input_group';
const StyledInputGroup = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledInputGroup",
  componentId: "sc-1m9g2wg-0"
})(["display:flex;justify-content:space-between;", ";"], componentStyles);

export { StyledInputGroup };
