/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { getColorV8, retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

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
  'data-garden-version': '8.76.9'
}).withConfig({
  displayName: "StyledGrip",
  componentId: "sc-n349wb-0"
})(["display:flex;transition:color 0.1s ease-in-out;box-sizing:border-box;color:", ";", " ", ";"], p => getColorV8('neutralHue', 600, p.theme), sizeStyles, props => retrieveComponentStyles(COMPONENT_ID, props));
StyledGrip.defaultProps = {
  theme: DEFAULT_THEME
};

export { StyledGrip };
