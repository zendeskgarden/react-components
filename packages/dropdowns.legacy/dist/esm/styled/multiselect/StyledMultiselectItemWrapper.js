/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.multiselect_item_wrapper';
const StyledMultiselectItemWrapper = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMultiselectItemWrapper",
  componentId: "sc-vgr7nd-0"
})(["display:inline-flex;align-items:center;margin:", "px;max-width:100%;", ";"], props => props.theme.space.base / 2, componentStyles);

export { StyledMultiselectItemWrapper };
