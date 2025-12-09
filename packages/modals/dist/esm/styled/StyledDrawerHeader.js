/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledHeader } from './StyledHeader.js';
import { BASE_MULTIPLIERS } from './StyledDrawerClose.js';

const COMPONENT_ID$3 = 'modals.drawer_modal.header';
const StyledDrawerHeader = styled(StyledHeader).attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDrawerHeader",
  componentId: "sc-y4mgkj-0"
})(["padding:", "px;", "  ", ";"], props => props.theme.space.base * 5, props => props.$isCloseButtonPresent && `padding-${props.theme.rtl ? 'left' : 'right'}: ${props.theme.space.base * (BASE_MULTIPLIERS.size + BASE_MULTIPLIERS.side + 2)}px;`, componentStyles);

export { StyledDrawerHeader };
