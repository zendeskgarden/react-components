/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$k = 'dropdowns.combobox.option.content';
const StyledOptionContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$k,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOptionContent",
  componentId: "sc-121ujpu-0"
})(["display:flex;flex-direction:column;flex-grow:1;", ";"], componentStyles);

export { StyledOptionContent };
