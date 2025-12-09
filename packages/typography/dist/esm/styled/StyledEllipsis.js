/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'typography.ellipsis';
const StyledEllipsis = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledEllipsis",
  componentId: "sc-1u4uqmy-0"
})(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;direction:", ";", ";"], props => props.theme.rtl ? 'rtl' : 'ltr', componentStyles);

export { StyledEllipsis };
