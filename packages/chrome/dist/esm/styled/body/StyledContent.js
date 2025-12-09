/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { getColor, componentStyles, getLineHeight } from '@zendeskgarden/react-theming';
import { getHeaderHeight, getFooterHeight } from '../utils.js';

const COMPONENT_ID = 'chrome.content';
const sizeStyles = _ref => {
  let {
    theme,
    $hasFooter
  } = _ref;
  const fontSize = theme.fontSizes.md;
  const height = $hasFooter ? `calc(100% - ${math(`${getHeaderHeight(theme)} + ${getFooterHeight(theme)}`)})` : `calc(100% - ${getHeaderHeight(theme)})`;
  const lineHeight = getLineHeight(theme.lineHeights.md, theme.fontSizes.md);
  return css(["height:", ";line-height:", ";font-size:", ";"], height, lineHeight, fontSize);
};
const StyledContent = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledContent",
  componentId: "sc-qcuzxn-0"
})(["display:flex;color-scheme:only ", ";color:", ";", ";&:focus{outline:none;}", ";"], p => p.theme.colors.base, props => getColor({
  theme: props.theme,
  variable: 'foreground.default'
}), sizeStyles, componentStyles);

export { StyledContent };
