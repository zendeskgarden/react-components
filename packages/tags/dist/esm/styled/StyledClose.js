/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$1 = 'tags.close';
const StyledClose = styled.button.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledClose",
  componentId: "sc-d6lrpn-0"
})(["display:flex;flex-shrink:0;align-items:center;justify-content:center;transition:opacity 0.25s ease-in-out;opacity:", ";border:0;background:transparent;cursor:pointer;padding:0;color:inherit;font-size:0;appearance:none;&:hover{opacity:", ";}&:focus{outline:none;}&:active{opacity:", ";}", ";"], props => props.theme.opacity[1000], props => props.theme.opacity[1100], props => props.theme.opacity[1200], componentStyles);

export { StyledClose };
