/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { math } from 'polished';
import { SIZE } from '../types/index.js';
import { StyledStatusIndicatorBase } from './StyledStatusIndicatorBase.js';
import { getStatusBorderOffset, includes } from './utility.js';

const COMPONENT_ID = 'avatars.status_indicator';
const [xxs, xs, s, m, l] = SIZE;
const sizeStyles = props => {
  const isVisible = props.$size !== xxs;
  const iconSize = props.$size === xs ? `${props.theme.space.base * 2}px` : undefined;
  const borderWidth = getStatusBorderOffset(props);
  let padding = '0';
  if (props.$size === s) {
    padding = math(`${props.theme.space.base + 1}px - (${borderWidth} * 2)`);
  } else if (includes([m, l], props.$size)) {
    padding = math(`${props.theme.space.base + 3}px - (${borderWidth} * 2)`);
  }
  return css(["max-width:calc(2em + (", " * 3));box-sizing:content-box;overflow:hidden;text-align:center;text-overflow:ellipsis;white-space:nowrap;font-size:", ";font-weight:", ";& > span{display:", ";padding:0 ", ";max-width:2em;overflow:inherit;text-align:inherit;text-overflow:inherit;white-space:inherit;}& > svg{", " width:", ";height:", ";}"], borderWidth, props.theme.fontSizes.xs, props.theme.fontWeights.semibold, isVisible ? 'inline-block' : 'none', padding, !isVisible && 'display: none;', iconSize, iconSize);
};
const colorStyles = _ref => {
  let {
    theme,
    $type,
    $size,
    $borderColor,
    $surfaceColor
  } = _ref;
  const shadowSize = $size === xxs ? 'xs' : 'sm';
  let boxShadow;
  const surfaceColor = $surfaceColor?.includes('.') ? getColor({
    variable: $surfaceColor,
    theme
  }) : $surfaceColor;
  if ($type) {
    boxShadow = theme.shadows[shadowSize](surfaceColor || getColor({
      theme,
      variable: 'background.default'
    }));
  } else {
    boxShadow = theme.shadows[shadowSize](surfaceColor || theme.palette.white);
  }
  return css(["border-color:", ";box-shadow:", ";"], $borderColor, boxShadow);
};
const StyledStatusIndicator = styled(StyledStatusIndicatorBase).attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  $size: props.$size ?? 'medium'
})).withConfig({
  displayName: "StyledStatusIndicator",
  componentId: "sc-16t9if3-0"
})(["", " ", " ", ";"], sizeStyles, colorStyles, componentStyles);

export { StyledStatusIndicator };
