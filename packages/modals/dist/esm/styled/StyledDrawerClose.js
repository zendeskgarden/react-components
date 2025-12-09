/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledClose, BASE_MULTIPLIERS as BASE_MULTIPLIERS$1 } from './StyledClose.js';

const COMPONENT_ID$4 = 'modals.drawer_modal.close';
const BASE_MULTIPLIERS = {
  side: 2,
  size: BASE_MULTIPLIERS$1.size
};
const StyledDrawerClose = styled(StyledClose).attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDrawerClose",
  componentId: "sc-1a0xt3x-0"
})(["", ":", ";", ";"], props => props.theme.rtl ? 'left' : 'right', props => `${props.theme.space.base * BASE_MULTIPLIERS.side}px`, componentStyles);

export { BASE_MULTIPLIERS, StyledDrawerClose };
