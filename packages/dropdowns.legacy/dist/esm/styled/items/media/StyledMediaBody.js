/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.media_body';
const StyledMediaBody = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMediaBody",
  componentId: "sc-133sssc-0"
})(["display:block;overflow:hidden;padding-", ":", "px;", ";"], props => props.theme.rtl ? 'right' : 'left', props => props.theme.space.base * 2, componentStyles);

export { StyledMediaBody };
