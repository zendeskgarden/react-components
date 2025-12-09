/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import SvgLinkStroke from '../node_modules/@zendeskgarden/svg-icons/src/16/link-stroke.svg.js';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$u = 'chrome.skipnav_icon';
const sizeStyles$f = ({
  theme
}) => {
  const margin = `${theme.space.base * 2}px`;
  const size = theme.iconSizes.md;
  return css(["margin-", ":", ";width:", ";height:", ";"], theme.rtl ? 'left' : 'right', margin, size, size);
};
const StyledSkipNavIcon = styled(SvgLinkStroke).attrs({
  'data-garden-id': COMPONENT_ID$u,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSkipNavIcon",
  componentId: "sc-1ika5z4-0"
})(["transform:", ";color:", ";", ";", ";"], p => p.theme.rtl && 'scaleX(-1)', p => getColor({
  theme: p.theme,
  variable: 'foreground.subtle'
}), sizeStyles$f, componentStyles);

export { StyledSkipNavIcon };
