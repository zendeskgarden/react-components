/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getColor, focusStyles } from '@zendeskgarden/react-theming';
import { StyledHeaderItemIcon } from './StyledHeaderItemIcon.js';
import { StyledBaseHeaderItem } from './StyledBaseHeaderItem.js';
import { StyledHeaderItemText } from './StyledHeaderItemText.js';
import { getHeaderItemSize } from '../utils.js';

const COMPONENT_ID$j = 'chrome.header_item';
const colorStyles$6 = ({
  theme,
  $maxY
}) => {
  const options = {
    theme,
    variable: 'foreground.subtle'
  };
  const hoverColor = getColor({
    ...options,
    dark: {
      offset: -100
    },
    light: {
      offset: 100
    }
  });
  const activeColor = getColor({
    ...options,
    dark: {
      offset: -200
    },
    light: {
      offset: 200
    }
  });
  return css(["&:hover,&:focus{color:inherit;}", ";&:hover ", ",&:hover ", "{color:", ";}&:active ", ",&:active ", "{color:", ";}"], focusStyles({
    theme,
    inset: $maxY
  }), StyledHeaderItemIcon, StyledHeaderItemText, hoverColor, StyledHeaderItemIcon, StyledHeaderItemText, activeColor);
};
const sizeStyles$8 = ({
  theme,
  $isRound
}) => {
  const iconBorderRadius = $isRound ? '100px' : undefined;
  const imageBorderRadius = math(`${theme.borderRadii.md} - 1`);
  const imageSize = math(`${getHeaderItemSize(theme)} - ${theme.space.base * 2}`);
  return css(["img{margin:0;border-radius:", ";width:", ";height:", ";}", "{border-radius:", ";}"], imageBorderRadius, imageSize, imageSize, StyledHeaderItemIcon, iconBorderRadius);
};
const StyledHeaderItem = styled(StyledBaseHeaderItem).attrs({
  'data-garden-id': COMPONENT_ID$j,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderItem",
  componentId: "sc-14sft6n-0"
})(["cursor:pointer;&:hover,&:focus{text-decoration:none;}", ";", ";& ", ",& ", "{transition:box-shadow 0.1s ease-in-out,color 0.1s ease-in-out;}", ";"], sizeStyles$8, colorStyles$6, StyledHeaderItemIcon, StyledHeaderItemText, componentStyles);

export { StyledHeaderItem };
