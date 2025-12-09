/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { StyledBaseIcon, componentStyles, getColor } from '@zendeskgarden/react-theming';
import { getMinHeight, StyledOption } from './StyledOption.js';

const COMPONENT_ID$d = 'dropdowns.combobox.option.type_icon';
const colorStyles$2 = ({
  theme,
  $type
}) => {
  const opacity = $type && $type !== 'danger' ? 1 : 0;
  let color;
  if ($type === 'add') {
    color = 'inherit';
  } else if ($type === 'header' || $type === 'next' || $type === 'previous') {
    color = getColor({
      theme,
      variable: 'foreground.subtle'
    });
  } else {
    color = getColor({
      theme,
      variable: 'foreground.primary'
    });
  }
  return css(["opacity:", ";color:", ";", "[aria-selected='true'] > &{opacity:1;}", "[aria-disabled='true'] > &{color:inherit;}"], opacity, color, StyledOption, StyledOption);
};
const sizeStyles = props => {
  const size = props.theme.iconSizes.md;
  const position = `${props.theme.space.base * 3}px`;
  const top = math(`(${getMinHeight(props)} - ${size}) / 2`);
  let side;
  if (props.$type === 'next') {
    side = props.theme.rtl ? 'left' : 'right';
  } else {
    side = props.theme.rtl ? 'right' : 'left';
  }
  return css(["top:", ";", ":", ";width:", ";height:", ";"], top, side, position, size, size);
};
const StyledOptionTypeIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$d,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOptionTypeIcon",
  componentId: "sc-xpink2-0"
})(["position:absolute;transform:", ";transition:opacity 0.1s ease-in-out;", ";", ";", ";"], props => props.theme.rtl && (props.$type === 'next' || props.$type === 'previous') && 'rotate(180deg)', sizeStyles, colorStyles$2, componentStyles);

export { StyledOptionTypeIcon };
