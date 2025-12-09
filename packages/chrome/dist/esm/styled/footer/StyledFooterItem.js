/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$p = 'chrome.footer_item';
const StyledFooterItem = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$p,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFooterItem",
  componentId: "sc-1cktm85-0"
})(["margin:", ";", ";"], props => `0 ${props.theme.space.base}px`, componentStyles);

export { StyledFooterItem };
