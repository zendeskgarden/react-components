/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { keyframes, css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { getStatusBorderOffset, getStatusSize, TRANSITION_DURATION, getStatusColor } from './utility.js';

const COMPONENT_ID$5 = 'avatars.status-indicator.base';
const iconFadeIn = keyframes(["0%{opacity:0;}100%{opacity:1;}"]);
const sizeStyles$3 = props => {
  const offset = getStatusBorderOffset(props);
  const size = getStatusSize(props, offset);
  return css(["border:", " ", ";border-radius:", ";min-width:", ";height:", ";line-height:", ";& > svg{position:absolute;top:-", ";inset-inline-start:-", ";transform-origin:50% 50%;animation:", " ", "s;max-height:unset;&[data-icon-status='transfers']{transform:scale(", ",1);inset-inline-start:", ";}&[data-icon-status='away'] circle{display:none;}}"], offset, props.theme.borderStyles.solid, size, size, size, size, offset, offset, iconFadeIn, TRANSITION_DURATION, props.theme.rtl ? -1 : 1, props.$size === 'extrasmall' ? '-1px' : undefined);
};
const colorStyles$2 = ({
  theme,
  $type
}) => {
  const foregroundColor = getColor({
    variable: 'foreground.onEmphasis',
    theme
  });
  let backgroundColor;
  let borderColor;
  if ($type === 'offline') {
    borderColor = getStatusColor(theme, $type);
    backgroundColor = getColor({
      variable: 'background.default',
      theme
    });
  } else {
    backgroundColor = getStatusColor(theme, $type);
    borderColor = backgroundColor;
  }
  return css(["border-color:", ";background-color:", ";color:", ";"], borderColor, backgroundColor, foregroundColor);
};
const StyledStatusIndicatorBase = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledStatusIndicatorBase",
  componentId: "sc-1rininy-0"
})(["transition:inherit;", " ", " ", ";"], sizeStyles$3, colorStyles$2, componentStyles);

export { StyledStatusIndicatorBase };
