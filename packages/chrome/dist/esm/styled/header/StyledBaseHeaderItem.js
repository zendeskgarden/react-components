/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getLineHeight } from '@zendeskgarden/react-theming';
import { getHeaderItemSize } from '../utils.js';

const COMPONENT_ID = 'chrome.base_header_item';
const sizeStyles = _ref => {
  let {
    theme,
    $maxY,
    $isRound
  } = _ref;
  const margin = `0 ${theme.space.base * 3}px`;
  const size = getHeaderItemSize(theme);
  const height = $maxY ? '100%' : size;
  const lineHeight = getLineHeight(size, theme.fontSizes.md);
  const padding = `0 ${theme.space.base * 0.75}px`;
  let borderRadius;
  if ($isRound) {
    borderRadius = '100%';
  } else if ($maxY) {
    borderRadius = '0';
  } else {
    borderRadius = theme.borderRadii.md;
  }
  return css(["margin:", ";border-radius:", ";padding:", ";min-width:", ";height:", ";line-height:", ";font-size:inherit;"], margin, borderRadius, padding, size, height, lineHeight);
};
const StyledBaseHeaderItem = styled.button.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBaseHeaderItem",
  componentId: "sc-1qua7h6-0"
})(["display:inline-flex;position:relative;flex:", ";align-items:center;justify-content:", ";order:1;transition:box-shadow 0.1s ease-in-out,color 0.1s ease-in-out;z-index:0;border:none;background:transparent;text-decoration:none;white-space:nowrap;color:inherit;", ";", ";"], props => props.$maxX && '1', props => props.$maxX ? 'start' : 'center', sizeStyles, componentStyles);

export { StyledBaseHeaderItem };
