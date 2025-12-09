/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'timeline.content.separator';
const StyledSeparator = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSeparator",
  componentId: "sc-fki51e-0"
})(["display:flex;position:relative;justify-content:center;padding:", ";&::after{position:absolute;border-left:", ";height:100%;content:'';}", ";"], props => `${props.theme.space.base * 5}px ${props.theme.space.base}px`, _ref => {
  let {
    theme
  } = _ref;
  return `${theme.borders.sm} ${getColor({
    theme,
    variable: 'border.emphasis'
  })}`;
}, componentStyles);

export { StyledSeparator };
