/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledClose, BASE_MULTIPLIERS as BASE_MULTIPLIERS$1 } from './StyledClose.js';

const COMPONENT_ID = 'modals.drawer_modal.close';
const BASE_MULTIPLIERS = {
  top: BASE_MULTIPLIERS$1.top,
  side: 2,
  size: BASE_MULTIPLIERS$1.size
};
const StyledDrawerClose = styled(StyledClose).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDrawerClose",
  componentId: "sc-1a0xt3x-0"
})(["", ":", ";", ";"], props => props.theme.rtl ? 'left' : 'right', props => `${props.theme.space.base * BASE_MULTIPLIERS.side}px`, componentStyles);

export { BASE_MULTIPLIERS, StyledDrawerClose };
