/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getColor, getLineHeight } from '@zendeskgarden/react-theming';
import { StyledMessageIcon } from './StyledMessageIcon.js';
import { StyledLabel } from './StyledLabel.js';

const COMPONENT_ID = 'forms.input_message';
const colorStyles = _ref => {
  let {
    theme,
    $validation
  } = _ref;
  let variable;
  if ($validation === 'error') {
    variable = 'foreground.danger';
  } else if ($validation === 'success') {
    variable = 'foreground.success';
  } else if ($validation === 'warning') {
    variable = 'foreground.warning';
  } else {
    variable = 'foreground.subtle';
  }
  const foregroundColor = getColor({
    theme,
    variable
  });
  return css(["color:", ";"], foregroundColor);
};
const sizeStyles = _ref2 => {
  let {
    theme,
    $validation
  } = _ref2;
  const fontSize = theme.fontSizes.sm;
  const lineHeight = getLineHeight(theme.iconSizes.md, theme.fontSizes.sm);
  const marginTop = `${theme.space.base}px`;
  const paddingHorizontal = $validation ? math(`${theme.space.base * 2} + ${theme.iconSizes.md}`) : undefined;
  return css(["padding-", ":", ";line-height:", ";font-size:", ";", ":not([hidden]) + &{margin-top:", ";}"], theme.rtl ? 'right' : 'left', paddingHorizontal, lineHeight, fontSize, StyledLabel, marginTop);
};
const StyledMessage = styled.div.attrs(props => ({
  'data-garden-id': props['data-garden-id'] || COMPONENT_ID,
  'data-garden-version': props['data-garden-version'] || '9.12.3'
})).withConfig({
  displayName: "StyledMessage",
  componentId: "sc-30hgg7-0"
})(["direction:", ";display:inline-block;position:relative;vertical-align:middle;", ";", ";& ", "{position:absolute;top:-1px;", ":0;}", ":not([hidden]) + &{display:block;}", ";"], props => props.theme.rtl && 'rtl', sizeStyles, colorStyles, StyledMessageIcon, props => props.theme.rtl ? 'right' : 'left', StyledLabel, componentStyles);

export { StyledMessage };
