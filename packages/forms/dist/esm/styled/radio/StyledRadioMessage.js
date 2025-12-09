/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { math } from 'polished';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledMessage } from '../common/StyledMessage.js';

const COMPONENT_ID$n = 'forms.radio_message';
const StyledRadioMessage = styled(StyledMessage).attrs({
  'data-garden-id': COMPONENT_ID$n,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledRadioMessage",
  componentId: "sc-1pmi0q8-0"
})(["padding-", ":", ";", ";"], props => props.theme.rtl ? 'right' : 'left', props => math(`${props.theme.space.base} * 6px`), componentStyles);

export { StyledRadioMessage };
