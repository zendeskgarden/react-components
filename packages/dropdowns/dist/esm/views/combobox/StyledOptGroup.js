/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$j = 'dropdowns.combobox.optgroup';
const StyledOptGroup = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID$j,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOptGroup",
  componentId: "sc-1kavqsx-0"
})(["margin:0;padding:0;list-style-type:none;", ";"], componentStyles);

export { StyledOptGroup };
