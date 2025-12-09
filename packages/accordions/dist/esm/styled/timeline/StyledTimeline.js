/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$5 = 'timeline';
const StyledTimeline = styled.ol.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTimeline",
  componentId: "sc-pig5kv-0"
})(["margin:0;padding:0;list-style:none;", ";"], componentStyles);

export { StyledTimeline };
