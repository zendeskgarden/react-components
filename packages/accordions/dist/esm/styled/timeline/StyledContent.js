/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$3 = 'timeline.content';
const StyledTimelineContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledContent__StyledTimelineContent",
  componentId: "sc-19phgu1-0"
})(["flex:1;padding:", ";", ";"], props => `${props.theme.space.base * 5}px ${props.theme.space.base * 4}px`, componentStyles);

export { StyledTimelineContent };
