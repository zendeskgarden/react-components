/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledRadioMessage } from '../radio/StyledRadioMessage.js';

const COMPONENT_ID = 'forms.checkbox_message';
const StyledCheckMessage = styled(StyledRadioMessage).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCheckMessage",
  componentId: "sc-s4p6kd-0"
})(["", ";"], componentStyles);

export { StyledCheckMessage };
