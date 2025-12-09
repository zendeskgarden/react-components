/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID$3 = 'draggable_list.drop_indicator';
const colorStyles$1 = props => {
  const {
    theme
  } = props;
  const color = getColor({
    variable: 'border.primaryEmphasis',
    theme
  });
  return css(["box-shadow:", ";&::before,&::after{background-color:", ";}&:focus{outline:none;}"], theme.shadows.xs(color), color);
};
const sizeStyles$2 = props => {
  const {
    $isHorizontal,
    theme
  } = props;
  const pseudoSize = theme.space.xs;
  const translateX = $isHorizontal ? theme.space.xxs : theme.space.xs;
  const translateY = $isHorizontal ? theme.space.xs : theme.space.xxs;
  return css(["&::before,&::after{border-radius:50%;width:", ";height:", ";}&::before{top:0;left:0;transform:translate(-", ",-", ");}&::after{right:0;bottom:0;transform:translate(", ",", ");}"], pseudoSize, pseudoSize, translateX, translateY, translateX, translateY);
};
const StyledDropIndicator = styled.li.attrs({
  'data-garden-id': COMPONENT_ID$3,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDropIndicator",
  componentId: "sc-1f1u2lh-0"
})(["position:relative;", " ", " &::before,&::after{position:absolute;content:'';}", ";"], sizeStyles$2, colorStyles$1, componentStyles);

export { StyledDropIndicator };
