/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropzone.icon';
function sizeStyles(_ref) {
  let {
    theme,
    isVertical
  } = _ref;
  let property;
  let value;
  if (isVertical) {
    property = 'margin-bottom';
    value = theme.space.xs;
  } else {
    property = theme.rtl ? 'margin-left' : 'margin-right';
    value = theme.space.xs;
  }
  return css(["", ":", ";"], property, value);
}
const StyledIcon = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '8.76.9'
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-1f3x7nk-0"
})(["display:flex;width:", ";height:", ";", " ", ";"], props => props.theme.iconSizes.md, props => props.theme.iconSizes.md, p => p.hasMessage && sizeStyles(p), props => retrieveComponentStyles(COMPONENT_ID, props));
StyledIcon.defaultProps = {
  theme: DEFAULT_THEME
};

export { StyledIcon };
