/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { hideVisually } from 'polished';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledHeaderItemIcon } from './StyledHeaderItemIcon.js';
import { StyledBaseHeaderItem } from './StyledBaseHeaderItem.js';
import { StyledHeaderItemText } from './StyledHeaderItemText.js';
import { getProductColor, getNavWidth } from '../utils.js';

const COMPONENT_ID = 'chrome.header_item';
const colorStyles = _ref => {
  let {
    theme,
    $product
  } = _ref;
  const borderColor = getColor({
    theme,
    variable: 'border.default'
  });
  const fill = getColor({
    theme,
    variable: 'foreground.default'
  });
  const color = getProductColor($product, fill );
  return css(["border-", "-color:", ";color:", ";fill:", ";"], theme.rtl ? 'left' : 'right', borderColor, color, fill);
};
const sizeStyles = _ref2 => {
  let {
    theme
  } = _ref2;
  const border = theme.borders.sm;
  const iconSize = theme.iconSizes.lg;
  const marginRight = theme.rtl ? `-${theme.space.base}px` : 'auto';
  const marginLeft = theme.rtl ? 'auto' : `-${theme.space.base}px`;
  const width = getNavWidth(theme);
  return css(["margin-right:", ";margin-left:", ";border-", ":", ";width:", ";height:100%;", "{margin:0;width:", ";height:", ";}"], marginRight, marginLeft, theme.rtl ? 'left' : 'right', border, width, StyledHeaderItemIcon, iconSize, iconSize);
};
const StyledLogoHeaderItem = styled(StyledBaseHeaderItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  as: 'div'
}).withConfig({
  displayName: "StyledLogoHeaderItem",
  componentId: "sc-1n1d1yv-0"
})(["display:none;order:0;border-radius:0;padding:0;overflow:hidden;text-decoration:none;", ";", ";", "{", "}", ";"], sizeStyles, colorStyles, StyledHeaderItemText, hideVisually(), componentStyles);

export { StyledLogoHeaderItem };
