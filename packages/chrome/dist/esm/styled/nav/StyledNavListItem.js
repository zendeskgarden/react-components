/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$f = 'chrome.nav_list_item';
const StyledNavListItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID$f,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledNavListItem",
  componentId: "sc-18cj2v7-0"
})(["display:flex;order:1;margin:0;padding:0;list-style-type:none;", ";"], componentStyles);

export { StyledNavListItem };
