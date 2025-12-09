/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$g = 'modals.footer';
const StyledFooter = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$g,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFooter",
  componentId: "sc-d8pfdu-0"
})(["display:flex;flex-shrink:0;align-items:center;justify-content:flex-end;border-top:", ";padding:", ";", ";"], props => props.$isLarge && `${props.theme.borders.sm} ${getColor({
  theme: props.theme,
  variable: 'border.default'
})}`, props => props.$isLarge ? `${props.theme.space.base * 8}px ${props.theme.space.base * 10}px` : `${props.theme.space.base * 5}px ${props.theme.space.base * 10}px ${props.theme.space.base * 8}px`, componentStyles);

export { StyledFooter };
