/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledPanel } from './StyledPanel.js';

const COMPONENT_ID = 'accordions.step_inner_panel';
const StyledInnerPanel = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledInnerPanel",
  componentId: "sc-8nbueg-0"
})(["overflow:hidden;line-height:inherit;font-size:inherit;", "[aria-hidden='true'] > &{transition:", ";visibility:hidden;}", "[aria-hidden='false'] > &{visibility:visible;}", ";"], StyledPanel, props => props.$isAnimated && 'visibility 0s 0.25s', StyledPanel, componentStyles);

export { StyledInnerPanel };
