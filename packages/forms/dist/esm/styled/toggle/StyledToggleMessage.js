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
import { StyledMessageIcon } from '../common/StyledMessageIcon.js';

const COMPONENT_ID = 'forms.toggle_message';
const StyledToggleMessage = styled(StyledMessage).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledToggleMessage",
  componentId: "sc-13vuvl1-0"
})(["padding-", ":", ";& ", "{", ":", ";}", ";"], props => props.theme.rtl ? 'right' : 'left', props => math(`${props.theme.space.base} * 12px`), StyledMessageIcon, props => props.theme.rtl ? 'right' : 'left', props => math(`${props.theme.space.base} * 10px - ${props.theme.iconSizes.md}`), componentStyles);

export { StyledToggleMessage };
