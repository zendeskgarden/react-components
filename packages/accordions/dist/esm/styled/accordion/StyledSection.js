/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledPanel } from './StyledPanel.js';

const COMPONENT_ID = 'accordions.section';
const StyledSection = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSection",
  componentId: "sc-v2t9bd-0"
})(["&:last-child ", "{border:none;}", ";"], StyledPanel, componentStyles);

export { StyledSection };
