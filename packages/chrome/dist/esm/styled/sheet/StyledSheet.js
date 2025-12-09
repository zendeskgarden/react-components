/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor, getLineHeight } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'chrome.sheet';
const colorStyles = _ref => {
  let {
    theme,
    $isOpen
  } = _ref;
  const backgroundColor = getColor({
    theme,
    variable: 'background.default'
  });
  const borderColor = $isOpen ? getColor({
    theme,
    variable: 'border.default'
  }) : 'transparent';
  return css(["border-color:", ";background-color:", ";"], borderColor, backgroundColor);
};
const sizeStyles = _ref2 => {
  let {
    theme,
    $isOpen,
    $placement,
    $size
  } = _ref2;
  const width = $isOpen ? $size : 0;
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(theme.space.base * 5, fontSize);
  const border = $isOpen ? theme.borders.sm : 'none';
  let borderProperty;
  if ($placement === 'start') {
    borderProperty = `border-${theme.rtl ? 'left' : 'right'}`;
  } else {
    borderProperty = `border-${theme.rtl ? 'right' : 'left'}`;
  }
  return css(["box-sizing:border-box;width:", ";height:100%;", ":", ";line-height:", ";font-size:", ";"], width, borderProperty, border, lineHeight, fontSize);
};
const StyledSheet = styled.aside.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSheet",
  componentId: "sc-dx8ijk-0"
})(["display:flex;order:1;transition:", ";overflow:hidden;", ";&:focus{outline:none;}", ";", ";"], props => props.$isAnimated && 'width 250ms ease-in-out', sizeStyles, colorStyles, componentStyles);

export { StyledSheet };
