/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet_header';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const borderColor = getColor({
    theme,
    variable: 'border.subtle'
  });
  return css(["border-bottom-color:", ";"], borderColor);
};
const sizeStyles = _ref2 => {
  let {
    theme,
    $isCloseButtonPresent
  } = _ref2;
  const border = theme.borders.sm;
  let padding = `${theme.space.base * 5}px`;
  if ($isCloseButtonPresent) {
    const paddingSide = `${theme.space.base * 14}px`;
    padding = theme.rtl ? `${padding} ${padding} ${padding} ${paddingSide}` : `${padding} ${paddingSide} ${padding} ${padding}`;
  }
  return css(["border-bottom:", ";padding:", ";"], border, padding);
};
const StyledSheetHeader = styled.header.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheetHeader",
  componentId: "sc-o2ry8i-0"
})(["", ";", ";", ";"], sizeStyles, colorStyles, componentStyles);

export { StyledSheetHeader };
