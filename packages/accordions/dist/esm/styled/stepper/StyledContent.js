/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$k = 'accordions.step_content';
const sizeStyles$2 = props => {
  const {
    rtl,
    space
  } = props.theme;
  const paddingBottom = props.$isActive ? space.base * 8 : space.base * 6;
  const paddingRight = rtl ? space.base * 6 : space.base * 5;
  const paddingLeft = rtl ? space.base * 5 : space.base * 6;
  const marginRight = rtl ? space.base * 3 : '0';
  const marginLeft = rtl ? '0' : space.base * 3;
  const marginVertical = space.base * 3;
  return css(["margin:", "px ", "px ", "px ", "px;padding:0 ", "px ", "px ", "px;min-width:", "px;height:auto;"], marginVertical, marginRight, marginVertical, marginLeft, paddingRight, paddingBottom, paddingLeft, space.base * 30);
};
const StyledContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$k,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledContent",
  componentId: "sc-mazvvo-0"
})(["display:grid;grid-template-rows:", "fr;transition:grid-template-rows 0.25s ease-in-out;word-break:break-word;", " ", ";"], props => props.$isActive ? 1 : 0, sizeStyles$2, componentStyles);

export { StyledContent };
