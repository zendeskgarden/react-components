/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { StyledBaseIcon, componentStyles, getColor } from '@zendeskgarden/react-theming';
import { getMinHeight } from './StyledOption.js';

const COMPONENT_ID = 'dropdowns.combobox.option.selection_icon';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const color = getColor({
    theme,
    variable: 'foreground.primary'
  });
  return css(["color:", ";"], color);
};
const sizeStyles = _ref2 => {
  let {
    theme,
    $isCompact
  } = _ref2;
  const size = theme.iconSizes.sm;
  const position = `${theme.space.base * 3.5}px`;
  const top = math(`(${getMinHeight({
    theme,
    $isCompact
  })} - ${size}) / 2`);
  const side = theme.rtl ? 'right' : 'left';
  return css(["top:", ";", ":", ";width:", ";height:", ";"], top, side, position, size, size);
};
const StyledOptionSelectionIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOptionSelectionIcon",
  componentId: "sc-12wj24m-0"
})(["position:absolute;", ";", ";", ";"], sizeStyles, colorStyles, componentStyles);

export { StyledOptionSelectionIcon };
