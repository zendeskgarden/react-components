/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { SELECTOR_FOCUS_VISIBLE, componentStyles, getColor, focusStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$1 = 'pane.splitter';
const colorStyles$1 = ({
  theme
}) => {
  const color = getColor({
    theme,
    variable: 'border.default'
  });
  const options = {
    theme,
    variable: 'border.primaryEmphasis'
  };
  const hoverColor = getColor(options);
  const activeColor = getColor({
    ...options,
    dark: {
      offset: -200
    },
    light: {
      offset: 200
    }
  });
  return css(["&::before{background-color:", ";}&:hover::before{background-color:", ";}", " &:active::before{background-color:", ";}"], color, hoverColor, focusStyles({
    theme,
    styles: {
      backgroundColor: hoverColor
    },
    selector: '&:focus-visible::before'
  }), activeColor);
};
const sizeStyles$2 = ({
  theme,
  $orientation,
  $isFixed
}) => {
  const size = math(`${theme.shadowWidths.md} * 2`);
  const separatorSize = math(`${theme.borderWidths.sm} * 2`);
  const offset = math(`-${size} / 2`);
  let cursor;
  let top;
  let right;
  let left;
  let bottom;
  let width;
  let height;
  let separatorWidth;
  let separatorHeight;
  switch ($orientation) {
    case 'top':
      cursor = 'row-resize';
      top = offset;
      width = '100%';
      height = size;
      separatorWidth = width;
      separatorHeight = theme.borderWidths.sm;
      break;
    case 'bottom':
      cursor = 'row-resize';
      bottom = offset;
      width = '100%';
      height = size;
      separatorWidth = width;
      separatorHeight = theme.borderWidths.sm;
      break;
    case 'start':
      cursor = 'col-resize';
      top = 0;
      width = size;
      height = '100%';
      separatorWidth = theme.borderWidths.sm;
      separatorHeight = height;
      if (theme.rtl) {
        right = offset;
      } else {
        left = offset;
      }
      break;
    case 'end':
    default:
      cursor = 'col-resize';
      top = 0;
      width = size;
      height = '100%';
      separatorWidth = theme.borderWidths.sm;
      separatorHeight = height;
      if (theme.rtl) {
        left = offset;
      } else {
        right = offset;
      }
      break;
  }
  const dimensionProperty = width === '100%' ? 'height' : 'width';
  return css(["top:", ";right:", ";bottom:", ";left:", ";cursor:", ";width:", ";height:", ";&::before{width:", ";height:", ";}&:hover::before{", ":", ";}&:focus::before,&:focus-visible::before{", ":", ";}&:focus-visible::before{border-radius:", ";}"], top, right, bottom, left, $isFixed ? 'pointer' : cursor, width, height, separatorWidth, separatorHeight, dimensionProperty, separatorSize, dimensionProperty, separatorSize, theme.borderRadii.md);
};
const StyledPaneSplitter = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledPaneSplitter",
  componentId: "sc-jylemn-0"
})(["display:flex;position:absolute;align-items:center;justify-content:center;z-index:1;user-select:none;", ";", "{z-index:2;}&::before{position:absolute;transition:box-shadow 0.1s ease-in-out,background-color 0.25s ease-in-out;z-index:-1;content:'';}", ";", ";"], sizeStyles$2, SELECTOR_FOCUS_VISIBLE, colorStyles$1, componentStyles);

export { StyledPaneSplitter };
