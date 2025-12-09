/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$w = 'chrome.chrome';
const StyledChrome = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$w,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledChrome",
  componentId: "sc-1uqm6u6-0"
})(["display:flex;position:relative;margin:0;height:100vh;overflow-y:hidden;font-family:", ";direction:", ";", ";"], props => props.theme.fonts.system, props => props.theme.rtl && 'rtl', componentStyles);

export { StyledChrome };
