/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { hideVisually } from 'polished';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.header_item_text';
const StyledHeaderItemText = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderItemText",
  componentId: "sc-goz7la-0"
})(["margin:", ";", " ", ";"], props => `0 ${props.theme.space.base * 0.75}px`, props => props.$isClipped && hideVisually(), componentStyles);

export { StyledHeaderItemText };
