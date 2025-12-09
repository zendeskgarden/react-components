/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'modals.drawer_modal';
const DRAWER_WIDTH = 380;
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const offsetY = `${theme.space.base * 5}px`;
  const blurRadius = `${theme.space.base * 7}px`;
  const shadowColor = getColor({
    variable: 'shadow.large',
    theme
  });
  const shadow = theme.shadows.lg(offsetY, blurRadius, shadowColor);
  const borderColor = getColor({
    theme,
    variable: 'border.default'
  });
  const backgroundColor = getColor({
    theme,
    variable: 'background.raised'
  });
  return css(["border-color:", ";box-shadow:", ";background-color:", ";"], borderColor, shadow, backgroundColor);
};
const StyledDrawer = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDrawer",
  componentId: "sc-zp66t3-0"
})(["display:flex;position:fixed;top:0;", ":0;flex-direction:column;z-index:500;", ":", ";width:", "px;height:100%;overflow:auto;-webkit-overflow-scrolling:touch;font-family:", ";direction:", ";&.garden-drawer-transition-enter{transform:translateX(", "px);}&.garden-drawer-transition-enter-active{transform:translateX(0);transition:transform 0.25s ease-in-out;}&.garden-drawer-transition-exit-active{transform:translateX(", "px);transition:transform 0.25s ease-in-out;}&:focus{outline:none;}", " ", ";"], props => props.theme.rtl ? 'left' : 'right', props => props.theme.rtl ? 'border-right' : 'border-left', props => props.theme.borders.sm, DRAWER_WIDTH, props => props.theme.fonts.system, props => props.theme.rtl && 'rtl', props => props.theme.rtl ? -DRAWER_WIDTH : DRAWER_WIDTH, props => props.theme.rtl ? -DRAWER_WIDTH : DRAWER_WIDTH, colorStyles, componentStyles);

export { StyledDrawer };
