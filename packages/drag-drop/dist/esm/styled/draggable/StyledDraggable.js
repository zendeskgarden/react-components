/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME, getColorV8, focusStyles, getLineHeight } from '@zendeskgarden/react-theming';
import { StyledGrip } from './StyledGrip.js';

const COMPONENT_ID = 'draggable';
function getDragShadow(theme) {
  const {
    space,
    shadows
  } = theme;
  const offsetY = `${space.base * 5}px`;
  const blurRadius = `${space.base * 7}px`;
  const color = getColorV8('neutralHue', 600, theme, 0.35);
  return shadows.lg(offsetY, blurRadius, color);
}
const colorStyles = props => {
  const {
    isBare,
    isGrabbed,
    isDisabled,
    isPlaceholder,
    focusInset,
    theme
  } = props;
  const baseColor = getColorV8('primaryHue', 600, theme);
  const dragShadow = getDragShadow(theme);
  const baseBgColor = getColorV8('background', 600 , theme);
  const disabledColor = getColorV8('neutralHue', 400, theme);
  let color;
  let hoverBackgroundColor;
  let boxShadow;
  let borderColor = 'transparent';
  let backgroundColor = baseBgColor;
  if (isDisabled) {
    backgroundColor = getColorV8('neutralHue', 200, theme);
    color = disabledColor;
  } else if (isPlaceholder) {
    backgroundColor = getColorV8('neutralHue', 800, theme, 0.1);
  } else {
    color = getColorV8('foreground', 600 , theme);
    borderColor = isBare ? 'transparent' : getColorV8('neutralHue', 300, theme);
    hoverBackgroundColor = isGrabbed ? baseBgColor : rgba(baseColor, 0.08);
    boxShadow = dragShadow;
  }
  return css(["border-color:", ";box-shadow:", ";background-color:", ";color:", ";&:hover{background-color:", ";}", " > ", "{color:", ";}"], borderColor, isGrabbed && boxShadow, backgroundColor, color, hoverBackgroundColor, focusStyles({
    theme,
    inset: focusInset,
    boxShadow: isGrabbed ? dragShadow : undefined
  }), StyledGrip, isDisabled && disabledColor);
};
const sizeStyles = props => {
  const {
    isCompact,
    theme
  } = props;
  const paddingDefault = theme.space.base * 2.25;
  const paddingCompact = theme.space.base * 1.25;
  return css(["margin:0;border:", ";border-radius:", ";padding:", ";line-height:", ";font-size:", ";font-weight:", ";"], theme.borders.sm, theme.borderRadii.md, isCompact ? `${paddingCompact}px ${paddingDefault}px` : `${paddingDefault}px`, getLineHeight(theme.space.base * 5, theme.fontSizes.md), theme.fontSizes.md, theme.fontWeights.regular);
};
const getCursor = props => {
  let cursor = props.isGrabbed ? 'grabbing' : 'grab';
  if (props.isDisabled || props.isPlaceholder) {
    cursor = 'default';
  }
  return cursor;
};
const StyledDraggable = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '8.76.9'
}).withConfig({
  displayName: "StyledDraggable",
  componentId: "sc-btbf2w-0"
})(["display:flex;flex:1;align-items:center;transition:border-color 0.25s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,z-index 0.25s ease-in-out;cursor:", ";font-family:", ";direction:", ";box-sizing:border-box;", " ", " > *{visibility:", ";}", ";"], getCursor, props => props.theme.fonts.system, props => props.theme.rtl && 'rtl', sizeStyles, colorStyles, p => p.isPlaceholder && !p.isDisabled && 'hidden', props => retrieveComponentStyles(COMPONENT_ID, props));
StyledDraggable.defaultProps = {
  theme: DEFAULT_THEME
};

export { StyledDraggable, getDragShadow };
