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

const COMPONENT_ID$e = 'dropdowns.combobox.option.selection_icon';
const colorStyles$3 = ({
  theme
}) => {
  const color = getColor({
    theme,
    variable: 'foreground.primary'
  });
  return css(["color:", ";"], color);
};
const sizeStyles$1 = ({
  theme,
  $isCompact
}) => {
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
  'data-garden-id': COMPONENT_ID$e,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOptionSelectionIcon",
  componentId: "sc-12wj24m-0"
})(["position:absolute;", ";", ";", ";"], sizeStyles$1, colorStyles$3, componentStyles);

export { StyledOptionSelectionIcon };
