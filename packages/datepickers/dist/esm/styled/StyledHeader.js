/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'datepickers.header';
const StyledHeader = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeader",
  componentId: "sc-upq318-0"
})(["display:flex;width:", "px;", ";"], props => props.$isCompact ? props.theme.space.base * 56 : props.theme.space.base * 70, componentStyles);

export { StyledHeader };
