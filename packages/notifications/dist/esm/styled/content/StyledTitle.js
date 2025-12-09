/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$b = 'notifications.title';
const StyledTitle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTitle",
  componentId: "sc-xx4jsv-0"
})(["margin:0;color:", ";font-weight:", ";", ";"], p => getColor({
  variable: 'foreground.default',
  theme: p.theme
}), props => props.$isRegular ? props.theme.fontWeights.regular : props.theme.fontWeights.semibold, componentStyles);

export { StyledTitle };
