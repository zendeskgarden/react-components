/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { StyledBaseIcon, componentStyles, getColor } from '@zendeskgarden/react-theming';
import { getHeight } from './StyledInput.js';
import { StyledTrigger } from './StyledTrigger.js';

const COMPONENT_ID$m = 'dropdowns.combobox.input_icon';
const colorStyles$8 = ({
  theme,
  $isLabelHovered
}) => {
  const options = {
    theme,
    variable: 'foreground.subtle'
  };
  const color = getColor(options);
  const focusColor = getColor({
    ...options,
    dark: {
      offset: -100
    },
    light: {
      offset: 100
    }
  });
  const disabledColor = getColor({
    theme,
    variable: 'foreground.disabled'
  });
  return css(["color:", ";", ":hover &&,", ":focus-within &&,", ":focus &&{color:", ";}", "[aria-disabled='true'] &&{color:", ";}"], $isLabelHovered ? focusColor : color, StyledTrigger, StyledTrigger, StyledTrigger, focusColor, StyledTrigger, disabledColor);
};
const sizeStyles$7 = props => {
  const size = props.theme.iconSizes.md;
  const position = math(`(${getHeight(props)} - ${size}) / 2`);
  const margin = `${props.theme.space.base * 2}px`;
  let side;
  if (props.$isEnd) {
    side = props.theme.rtl ? 'right' : 'left';
  } else {
    side = props.theme.rtl ? 'left' : 'right';
  }
  return css(["top:", ";margin-", ":", ";width:", ";height:", ";"], position, side, margin, size, size);
};
const StyledInputIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$m,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledInputIcon",
  componentId: "sc-gqbs1s-0"
})(["position:sticky;flex-shrink:0;transform:", ";transition:transform 0.25s ease-in-out,color 0.25s ease-in-out;", ";", ";", ";"], props => props.$isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`, sizeStyles$7, colorStyles$8, componentStyles);

export { StyledInputIcon };
