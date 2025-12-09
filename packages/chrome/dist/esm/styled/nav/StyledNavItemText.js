/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getLineHeight } from '@zendeskgarden/react-theming';
import { StyledNavButton } from './StyledNavButton.js';
import { getNavWidth } from '../utils.js';

const COMPONENT_ID = 'chrome.nav_item_text';
const sizeStyles = _ref => {
  let {
    theme,
    $isExpanded,
    $isWrapped
  } = _ref;
  const clip = $isExpanded ? 'auto' : undefined;
  const lineHeight = getLineHeight(theme.space.base * 5, theme.fontSizes.md);
  const margin = $isExpanded ? `0 ${math(`(${getNavWidth(theme)} - ${theme.iconSizes.lg}) / 4`)}` : undefined;
  const width = $isExpanded ? 'auto' : undefined;
  const height = $isExpanded ? 'auto' : undefined;
  const whiteSpace = $isWrapped ? undefined : 'nowrap';
  return css(["clip:rect(1px,1px,1px,1px);margin:", ";width:1px;height:1px;line-height:", ";white-space:", ";", " > &&{clip:", ";width:", ";height:", ";}"], margin, lineHeight, whiteSpace, StyledNavButton, clip, width, height);
};
const StyledNavItemText = styled.span.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledNavItemText",
  componentId: "sc-13m84xl-0"
})(["position:absolute;order:1;overflow:hidden;", " > &&{position:", ";flex:", ";text-overflow:", ";}", ";", ";"], StyledNavButton, props => props.$isExpanded ? 'static' : undefined, props => props.$isExpanded ? 1 : undefined, props => props.$isExpanded ? 'ellipsis' : undefined, sizeStyles, componentStyles);

export { StyledNavItemText };
