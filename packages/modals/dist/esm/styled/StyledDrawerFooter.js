/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$1 = 'modals.drawer_modal.footer';
const StyledDrawerFooter = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDrawerFooter",
  componentId: "sc-kc7e6p-0"
})(["display:flex;flex-shrink:0;justify-content:flex-end;border-top:", ";padding:", "px;", ";"], ({
  theme
}) => `${theme.borders.sm} ${getColor({
  theme,
  variable: 'border.subtle'
})}`, props => props.theme.space.base * 5, componentStyles);

export { StyledDrawerFooter };
