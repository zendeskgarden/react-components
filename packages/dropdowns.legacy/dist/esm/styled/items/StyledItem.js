/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.item';
const getItemPaddingVertical = props => {
  if (props.$isCompact) {
    return `${props.theme.space.base}px`;
  }
  return `${props.theme.space.base * 2}px`;
};
const getColorStyles = props => {
  const backgroundColor = props.$isFocused ? getColor({
    theme: props.theme,
    variable: 'background.primaryEmphasis',
    transparency: props.theme.opacity[100]
  }) : 'inherit';
  let foregroundColor;
  if (props.disabled) {
    foregroundColor = getColor({
      theme: props.theme,
      variable: 'foreground.disabled'
    });
  } else if (props.$isDanger) {
    foregroundColor = getColor({
      theme: props.theme,
      variable: 'foreground.danger'
    });
  } else {
    foregroundColor = getColor({
      theme: props.theme,
      variable: 'foreground.default'
    });
  }
  return css(["background-color:", ";color:", ";& a,& a:hover,& a:focus,& a:active{color:inherit;}"], backgroundColor, foregroundColor);
};
const StyledItem = styled.li.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  'aria-disabled': props.disabled
})).withConfig({
  displayName: "StyledItem",
  componentId: "sc-x4h8aw-0"
})(["display:block;position:relative;z-index:0;cursor:", ";padding:", " ", "px;text-decoration:none;line-height:", "px;word-wrap:break-word;user-select:none;&:first-child{margin-top:", "px;}&:last-child{margin-bottom:", "px;}&:focus{outline:none;}& a,& a:hover,& a:focus,& a:active{text-decoration:none;}", ";", ";"], props => props.disabled ? 'default' : 'pointer', props => getItemPaddingVertical(props), props => props.theme.space.base * 9, props => props.theme.space.base * 5, props => props.theme.space.base, props => props.theme.space.base, props => getColorStyles(props), componentStyles);

export { StyledItem, getItemPaddingVertical };
