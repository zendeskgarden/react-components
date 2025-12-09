/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { keyframes, css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { math } from 'polished';
import { SIZE } from '../types/index.js';
import { StyledText } from './StyledText.js';
import { StyledStatusIndicator } from './StyledStatusIndicator.js';
import { TRANSITION_DURATION, getStatusColor } from './utility.js';

const COMPONENT_ID = 'avatars.avatar';
const badgeStyles = props => {
  const [xxs, xs, s, m, l] = SIZE;
  let position = `${props.theme.space.base * -1}px`;
  switch (props.$size) {
    case xxs:
    case xs:
      position = math(`${position}  + 3`);
      break;
    case s:
    case m:
    case l:
      position = math(`${position}  + 2`);
      break;
  }
  const animation = keyframes(["0%{transform:scale(.1);}"]);
  return css(["position:absolute;", ":", ";bottom:", ";transition:all ", "s ease-in-out;", ""], props.theme.rtl ? 'left' : 'right', position, position, TRANSITION_DURATION, props.$status === 'active' && css(["animation:", " ", "s ease-in-out;"], animation, TRANSITION_DURATION * 1.5));
};
const colorStyles = _ref => {
  let {
    theme,
    $foregroundColor,
    $surfaceColor,
    $backgroundColor,
    $status
  } = _ref;
  const statusColor = getStatusColor(theme, $status);
  let backgroundColor = 'transparent';
  let foregroundColor = theme.palette.white;
  let surfaceColor;
  if ($backgroundColor) {
    backgroundColor = $backgroundColor.includes('.') ? getColor({
      theme,
      variable: $backgroundColor
    }) : $backgroundColor;
  }
  if ($foregroundColor) {
    foregroundColor = $foregroundColor.includes('.') ? getColor({
      theme,
      variable: $foregroundColor
    }) : $foregroundColor;
  }
  if ($status) {
    surfaceColor = $surfaceColor?.includes('.') ? getColor({
      variable: $surfaceColor,
      theme
    }) : $surfaceColor || getColor({
      variable: 'background.default',
      theme
    });
  } else {
    surfaceColor = 'transparent';
  }
  return css(["box-shadow:", ";background-color:", ";&&{color:", ";}& > svg,& ", "{color:", ";}"], theme.shadows.sm(statusColor), backgroundColor, surfaceColor, StyledText, foregroundColor);
};
const sizeStyles = props => {
  let boxShadow;
  let borderRadius;
  let size;
  let fontSize;
  let svgSize;
  if (props.$size === 'extraextrasmall') {
    boxShadow = `0 0 0 ${math(`${props.theme.shadowWidths.sm} - 1`)}`;
    borderRadius = props.$isSystem ? math(`${props.theme.borderRadii.md} - 1`) : '50%';
    size = `${props.theme.space.base * 4}px`;
    fontSize = 0;
    svgSize = `${props.theme.space.base * 3}px`;
  } else if (props.$size === 'extrasmall') {
    boxShadow = `inset 0 0 0 ${props.theme.shadowWidths.sm}`;
    borderRadius = props.$isSystem ? math(`${props.theme.borderRadii.md} - 1`) : '50%';
    size = `${props.theme.space.base * 6}px`;
    fontSize = props.theme.fontSizes.sm;
    svgSize = `${props.theme.space.base * 3}px`;
  } else if (props.$size === 'small') {
    boxShadow = `inset 0 0 0 ${props.theme.shadowWidths.sm}`;
    borderRadius = props.$isSystem ? math(`${props.theme.borderRadii.md} - 1`) : '50%';
    size = `${props.theme.space.base * 8}px`;
    fontSize = props.theme.fontSizes.md;
    svgSize = `${props.theme.space.base * 3}px`;
  } else if (props.$size === 'large') {
    boxShadow = `inset 0 0 0 ${props.theme.shadowWidths.sm}`;
    borderRadius = props.$isSystem ? math(`${props.theme.borderRadii.md} + 1`) : '50%';
    size = `${props.theme.space.base * 12}px`;
    fontSize = props.theme.fontSizes.xl;
    svgSize = `${props.theme.space.base * 6}px`;
  } else {
    boxShadow = `inset 0 0 0 ${props.theme.shadowWidths.sm}`;
    borderRadius = props.$isSystem ? props.theme.borderRadii.md : '50%';
    size = `${props.theme.space.base * 10}px`;
    fontSize = props.theme.fontSizes.lg;
    svgSize = `${props.theme.space.base * 4}px`;
  }
  return css(["border-radius:", ";width:", " !important;height:", " !important;&::before{box-shadow:", ";}& > svg{font-size:", ";}& ", "{line-height:", ";font-size:", ";}"], borderRadius, size, size, boxShadow, svgSize, StyledText, size, fontSize);
};
const StyledAvatar = styled.figure.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  $size: props.$size ?? 'medium'
})).withConfig({
  displayName: "StyledAvatar",
  componentId: "sc-608m04-0"
})(["display:inline-flex;position:relative;align-items:center;justify-content:center;transition:box-shadow ", "s ease-in-out,color 0.1s ease-in-out;margin:0;vertical-align:middle;box-sizing:border-box;", ";", ";&::before{position:absolute;top:0;left:0;transition:box-shadow ", "s ease-in-out;content:'';}&::before,&& > img{border-radius:inherit;width:100%;height:100%;}&& > img{box-sizing:inherit;vertical-align:bottom;object-fit:cover;}&& > svg{width:1em;height:1em;}& > ", "{", ";}", ";"], TRANSITION_DURATION, props => sizeStyles(props), props => colorStyles(props), TRANSITION_DURATION, StyledStatusIndicator, badgeStyles, componentStyles);

export { StyledAvatar };
