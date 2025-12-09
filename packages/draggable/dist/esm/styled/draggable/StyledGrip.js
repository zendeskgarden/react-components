/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'draggable.grip';
function sizeStyles(_ref) {
  let {
    theme
  } = _ref;
  const property = theme.rtl ? 'margin-left' : 'margin-right';
  return css(["", ":", ";"], property, theme.space.xs);
}
const StyledGrip = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledGrip",
  componentId: "sc-13uv9iv-0"
})(["display:flex;transition:color 0.1s ease-in-out;box-sizing:border-box;color:", ";", " ", ";"], p => getColor({
  variable: 'foreground.subtle',
  theme: p.theme
}), sizeStyles, componentStyles);

export { StyledGrip };
