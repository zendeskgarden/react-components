/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.footer_item';
const StyledFooterItem = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFooterItem",
  componentId: "sc-1mb76hl-0"
})(["display:flex;margin-", ":", "px;min-width:0;&:first-child{margin-", ":0;}", ";"], props => props.theme.rtl ? 'right' : 'left', props => props.theme.space.base * 5, props => props.theme.rtl ? 'right' : 'left', componentStyles);

export { StyledFooterItem };
