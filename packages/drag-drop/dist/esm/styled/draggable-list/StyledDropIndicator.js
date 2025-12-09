/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME, getColorV8 } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'draggable_list.drop_indicator';
const colorStyles = props => {
  const {
    theme
  } = props;
  const backgroundColor = getColorV8('primaryHue', 600, theme);
  const color = getColorV8('primaryHue', 600, theme);
  return css(["box-shadow:", ";&::before,&::after{background-color:", ";}&:focus{outline:none;}"], `0 0 0 ${theme.borderWidths.sm} ${color}`, backgroundColor);
};
const sizeStyles = props => {
  const {
    isHorizontal,
    theme
  } = props;
  const pseudoSize = theme.space.xs;
  const translateX = isHorizontal ? theme.space.xxs : theme.space.xs;
  const translateY = isHorizontal ? theme.space.xs : theme.space.xxs;
  return css(["&::before,&::after{border-radius:50%;width:", ";height:", ";}&::before{top:0;left:0;transform:translate(-", ",-", ");}&::after{right:0;bottom:0;transform:translate(", ",", ");}"], pseudoSize, pseudoSize, translateX, translateY, translateX, translateY);
};
const StyledDropIndicator = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '8.76.9'
}).withConfig({
  displayName: "StyledDropIndicator",
  componentId: "sc-1bot7ty-0"
})(["position:relative;", " ", " &::before,&::after{position:absolute;content:'';}", ";"], sizeStyles, colorStyles, props => retrieveComponentStyles(COMPONENT_ID, props));
StyledDropIndicator.defaultProps = {
  theme: DEFAULT_THEME
};

export { StyledDropIndicator };
