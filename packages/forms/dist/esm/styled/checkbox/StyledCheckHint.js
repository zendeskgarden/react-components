/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledRadioHint } from '../radio/StyledRadioHint.js';

const COMPONENT_ID$q = 'forms.checkbox_hint';
const StyledCheckHint = styled(StyledRadioHint).attrs({
  'data-garden-id': COMPONENT_ID$q,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCheckHint",
  componentId: "sc-1kl8e8c-0"
})(["", ";"], componentStyles);

export { StyledCheckHint };
