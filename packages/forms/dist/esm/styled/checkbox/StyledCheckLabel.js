/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledRadioLabel } from '../radio/StyledRadioLabel.js';

const COMPONENT_ID$s = 'forms.checkbox_label';
const StyledCheckLabel = styled(StyledRadioLabel).attrs({
  'data-garden-id': COMPONENT_ID$s,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCheckLabel",
  componentId: "sc-x7nr1-0"
})(["", ";"], componentStyles);

export { StyledCheckLabel };
