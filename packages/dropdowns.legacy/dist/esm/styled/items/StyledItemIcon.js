/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { getColor } from '@zendeskgarden/react-theming';
import { getItemPaddingVertical } from './StyledItem.js';

const COMPONENT_ID = 'dropdowns.item_icon';
const getSizeStyles = props => {
  return css(["width:", ";height:calc(", "px + ", ");"], props.theme.iconSizes.md, props.theme.space.base * 5, math(`${getItemPaddingVertical(props)} * 2`));
};
const StyledItemIcon = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledItemIcon",
  componentId: "sc-pspm80-0"
})(["display:flex;position:absolute;top:0;", ":", "px;align-items:center;justify-content:center;transition:opacity 0.1s ease-in-out;opacity:", ";color:", ";", ";& > *{width:", ";height:", ";}"], props => props.theme.rtl ? 'right' : 'left', props => props.theme.space.base * 3, props => props.$isVisible ? '1' : '0', props => props.$isDisabled ? 'inherit' : getColor({
  theme: props.theme,
  variable: 'foreground.primary'
}), props => getSizeStyles(props), props => props.theme.iconSizes.md, props => props.theme.iconSizes.md);

export { StyledItemIcon };
