/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getLineHeight, getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'accordions.step_inner_content';
const StyledInnerContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledInnerContent",
  componentId: "sc-1xs9fh7-0"
})(["overflow:hidden;line-height:", ";color:", ";font-size:", ";", ";"], props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), _ref => {
  let {
    theme
  } = _ref;
  return getColor({
    theme,
    variable: 'foreground.default'
  });
}, props => props.theme.fontSizes.md, componentStyles);

export { StyledInnerContent };
