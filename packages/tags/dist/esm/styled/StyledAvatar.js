/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { StyledBaseIcon, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tags.avatar';
const StyledAvatar = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledAvatar",
  componentId: "sc-3kdmgt-0"
})(["flex-shrink:0;font-size:0;", ";"], componentStyles);

export { StyledAvatar };
