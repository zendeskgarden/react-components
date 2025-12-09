/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledBody } from './StyledBody.js';

const COMPONENT_ID$2 = 'modals.drawer_modal.body';
const StyledDrawerBody = styled(StyledBody).attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDrawerBody",
  componentId: "sc-13qufyn-0"
})(["padding:", "px;color-scheme:only ", ";", ";"], props => props.theme.space.base * 5, p => p.theme.colors.base, componentStyles);

export { StyledDrawerBody };
