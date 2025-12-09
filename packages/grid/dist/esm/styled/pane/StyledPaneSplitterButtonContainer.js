/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { stripUnit, math } from 'polished';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledPaneSplitter } from './StyledPaneSplitter.js';
import { getSize } from './StyledPaneSplitterButton.js';

const COMPONENT_ID = 'pane.splitter_button_container';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const backgroundColor = getColor({
    theme,
    variable: 'background.raised'
  });
  const boxShadow = theme.shadows.lg(`${theme.space.base}px`, `${theme.space.base * 2}px`, getColor({
    variable: 'shadow.small',
    theme
  }));
  return css(["box-shadow:", ";background-color:", ";"], boxShadow, backgroundColor);
};
const positionStyles = _ref2 => {
  let {
    theme,
    $orientation,
    $placement,
    $splitterSize
  } = _ref2;
  let top;
  let left;
  let right;
  let bottom;
  const size = getSize(theme);
  const inset = `-${size / 2}px`;
  if ($placement === 'center' || $splitterSize < size * 3) {
    const center = `${$splitterSize / 2 - size / 2}px`;
    switch (`${$orientation}-${theme.rtl ? 'rtl' : 'ltr'}`) {
      case 'top-ltr':
      case 'top-rtl':
        top = inset;
        left = center;
        break;
      case 'start-ltr':
      case 'end-rtl':
        top = center;
        left = inset;
        break;
      case 'end-ltr':
      case 'start-rtl':
        top = center;
        right = inset;
        break;
      case 'bottom-ltr':
      case 'bottom-rtl':
        bottom = inset;
        right = center;
        break;
    }
  } else {
    const offset = `${size}px`;
    switch (`${$orientation}-${$placement}-${theme.rtl ? 'rtl' : 'ltr'}`) {
      case 'top-end-ltr':
      case 'top-end-rtl':
      case 'top-start-rtl':
        top = inset;
        right = offset;
        break;
      case 'bottom-end-ltr':
      case 'bottom-end-rtl':
      case 'bottom-start-rtl':
        bottom = inset;
        right = offset;
        break;
      case 'start-start-ltr':
      case 'end-start-rtl':
        top = offset;
        left = inset;
        break;
      case 'start-end-ltr':
      case 'end-end-rtl':
        bottom = offset;
        left = inset;
        break;
      case 'end-start-ltr':
      case 'start-start-rtl':
        top = offset;
        right = inset;
        break;
      case 'end-end-ltr':
      case 'start-end-rtl':
        bottom = offset;
        right = inset;
        break;
      case 'top-start-ltr':
        top = inset;
        left = offset;
        break;
      case 'bottom-start-ltr':
        bottom = inset;
        left = offset;
        break;
    }
  }
  return css(["top:", ";right:", ";bottom:", ";left:", ";"], top, right, bottom, left);
};
const sizeStyles = _ref3 => {
  let {
    theme
  } = _ref3;
  const size = getSize(theme);
  return css(["border-radius:", "px;width:", "px;height:", "px;"], size, size, size);
};
const minimumSplitterSize = theme => stripUnit(math(`${theme.shadowWidths.md} * 2 + ${getSize(theme)}`));
const StyledPaneSplitterButtonContainer = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledPaneSplitterButtonContainer",
  componentId: "sc-1w84y62-0"
})(["display:", ";position:absolute;transition:box-shadow 0.1s ease-in-out,opacity 0.25s ease-in-out 0.1s;opacity:0;z-index:2;", ";", ";", ";&:hover,&:focus-within,", ":hover ~ &,", ":focus-visible ~ &{opacity:1;}", ";"], props => props.$splitterSize <= minimumSplitterSize(props.theme) ? 'none' : undefined, positionStyles, sizeStyles, colorStyles, StyledPaneSplitter, StyledPaneSplitter, componentStyles);

export { StyledPaneSplitterButtonContainer };
