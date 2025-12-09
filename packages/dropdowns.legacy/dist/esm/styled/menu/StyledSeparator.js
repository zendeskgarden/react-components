/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.separator';
const StyledSeparator = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  role: 'separator'
}).withConfig({
  displayName: "StyledSeparator",
  componentId: "sc-oncsf0-0"
})(["display:block;margin:", "px 0;border-bottom:", ";", ";"], props => props.theme.space.base, props => `${props.theme.borders.sm} ${getColor({
  theme: props.theme,
  variable: 'border.subtle'
})}`, componentStyles);

export { StyledSeparator };
