/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { math } from 'polished';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledHint } from '../common/StyledHint.js';

const COMPONENT_ID$a = 'forms.toggle_hint';
const StyledToggleHint = styled(StyledHint).attrs({
  'data-garden-id': COMPONENT_ID$a,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledToggleHint",
  componentId: "sc-nziggu-0"
})(["padding-", ":", ";", ";"], props => props.theme.rtl ? 'right' : 'left', props => math(`${props.theme.space.base} * 12px`), componentStyles);

export { StyledToggleHint };
