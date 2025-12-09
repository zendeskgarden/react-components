/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$r = 'chrome.main';
const StyledMain = styled.main.attrs({
  'data-garden-id': COMPONENT_ID$r,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMain",
  componentId: "sc-t61cre-0"
})(["flex:1;order:1;background-color:", ";overflow:auto;&:focus{outline:none;}", ";"], props => getColor({
  theme: props.theme,
  variable: 'background.default'
}), componentStyles);

export { StyledMain };
