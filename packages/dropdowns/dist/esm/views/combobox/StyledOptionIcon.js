/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { StyledBaseIcon, componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropdowns.combobox.option.icon';
const colorStyles = _ref => {
  let {
    theme,
    $isDisabled,
    $type
  } = _ref;
  let variable;
  if ($isDisabled) {
    variable = 'foreground.disabled';
  } else if ($type === 'danger') {
    variable = 'foreground.danger';
  } else if ($type === 'add') {
    variable = 'foreground.primary';
  } else {
    variable = 'foreground.subtle';
  }
  const color = getColor({
    theme,
    variable
  });
  return css(["color:", ";"], color);
};
const sizeStyles = props => {
  const size = props.theme.iconSizes.md;
  const marginTop = math(`(${props.theme.lineHeights.md} - ${size}) / 2`);
  const marginHorizontal = `${props.theme.space.base * 2}px`;
  return css(["margin-top:", ";margin-", ":", ";width:", ";height:", ";"], marginTop, props.theme.rtl ? 'left' : 'right', marginHorizontal, size, size);
};
const StyledOptionIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOptionIcon",
  componentId: "sc-qsab3y-0"
})(["flex-shrink:0;", ";", ";", ";"], sizeStyles, colorStyles, componentStyles);

export { StyledOptionIcon };
