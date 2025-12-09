/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { keyframes, css } from 'styled-components';
import { math } from 'polished';
import { SELECTOR_FOCUS_VISIBLE, componentStyles, getLineHeight, getColor, focusStyles } from '@zendeskgarden/react-theming';
import { getHeaderHeight } from './utils.js';

const COMPONENT_ID$v = 'chrome.skipnav';
const animationStyles = () => {
  const animationName = keyframes(["0%{transform:translate(-50%,-50%);}"]);
  return css(["transition:opacity 0.2s ease-out,clip 0s linear 0.2s;opacity:0;clip:rect(0,0,0,0);&:focus{transition:opacity 0.2s ease-in-out;animation:0.2s cubic-bezier(0.15,0.85,0.35,1.2) ", ";opacity:1;clip:rect(0,150vw,100vh,-50vw);}"], animationName);
};
const colorStyles$a = ({
  theme
}) => {
  const backgroundColor = getColor({
    theme,
    variable: 'background.raised'
  });
  const borderColor = getColor({
    theme,
    variable: 'border.default'
  });
  const boxShadowColor = getColor({
    variable: 'shadow.medium',
    theme
  });
  const boxShadow = theme.shadows.lg(`${theme.space.base * 4}px`, `${theme.space.base * 6}px`, boxShadowColor);
  const foregroundColor = getColor({
    theme,
    variable: 'foreground.primary'
  });
  return css(["border-color:", ";box-shadow:", ";background-color:", ";color:", ";&:hover,&:focus{color:", ";}", ""], borderColor, boxShadow, backgroundColor, foregroundColor, foregroundColor, focusStyles({
    theme,
    inset: true,
    boxShadow
  }));
};
const sizeStyles$g = ({
  theme
}) => {
  const top = math(`${getHeaderHeight(theme)} / 2`);
  const border = theme.borders.sm;
  const padding = `${theme.space.base * 5}px`;
  const paddingStart = `${theme.space.base * 4}px`;
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(padding, fontSize);
  return css(["top:", ";border:", ";padding:", ";padding-", ":", ";line-height:", ";font-size:", ";"], top, border, padding, theme.rtl ? 'right' : 'left', paddingStart, lineHeight, fontSize);
};
const StyledSkipNav = styled.a.attrs({
  'data-garden-id': COMPONENT_ID$v,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSkipNav",
  componentId: "sc-1tsro34-0"
})(["", ";display:inline-flex;position:absolute;left:50%;align-items:center;justify-content:center;transform:translateX(-50%);direction:", ";z-index:", ";border-radius:", ";text-decoration:underline;white-space:nowrap;", ";", "{text-decoration:none;}&:hover{text-decoration:underline;}", ";", ";"], animationStyles(), props => props.theme.rtl && 'rtl', props => props.$zIndex, props => props.theme.borderRadii.md, sizeStyles$g, SELECTOR_FOCUS_VISIBLE, colorStyles$a, componentStyles);

export { StyledSkipNav };
