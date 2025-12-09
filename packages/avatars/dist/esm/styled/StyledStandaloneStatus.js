/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { TRANSITION_DURATION } from './utility.js';

const COMPONENT_ID = 'avatars.status-indicator.status';
const StyledStandaloneStatus = styled.figure.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledStandaloneStatus",
  componentId: "sc-1ow4nfj-0"
})(["display:inline-flex;flex-flow:row nowrap;transition:all ", "s ease-in-out;margin:0;box-sizing:content-box;", ";"], TRANSITION_DURATION, componentStyles);

export { StyledStandaloneStatus };
