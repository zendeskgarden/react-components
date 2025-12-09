/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { getNavItemHeight, getNavWidth } from '../utils.js';

const COMPONENT_ID = 'chrome.base_nav_item';
const sizeStyles = _ref => {
  let {
    theme
  } = _ref;
  const minHeight = getNavItemHeight(theme);
  const verticalPadding = math(`(${minHeight} - ${theme.iconSizes.lg}) / 2`);
  const horizontalPadding = math(`(${getNavWidth(theme)} - ${theme.iconSizes.lg}) / 4`);
  return css(["padding:", " ", ";min-height:", ";"], verticalPadding, horizontalPadding, minHeight);
};
const StyledBaseNavItem = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBaseNavItem",
  componentId: "sc-zvo43f-0"
})(["display:flex;flex-shrink:0;align-items:center;justify-content:center;transition:outline-color 0.1s ease-in-out,box-shadow 0.1s ease-in-out,background-color 0.1s ease-in-out,opacity 0.1s ease-in-out;", ";"], sizeStyles);

export { StyledBaseNavItem };
