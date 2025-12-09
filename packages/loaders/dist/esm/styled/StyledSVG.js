/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { getValueAndUnit } from 'polished';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { delayedVisibilityKeyframes } from '../utils/animations.js';

const colorStyles$1 = ({
  theme,
  $color = 'inherit'
}) => {
  const options = $color.includes('.') ? {
    variable: $color,
    theme
  } : {
    hue: $color,
    theme
  };
  return css(["color:", ";"], getColor(options));
};
const sizeStyles = ({
  $containerWidth = '1em',
  $containerHeight = '0.9em',
  $fontSize = 'inherit'
}) => {
  const [value, unit] = getValueAndUnit($fontSize);
  let fontSize;
  if (unit === undefined) {
    fontSize = $fontSize;
  } else {
    fontSize = `${value}${unit === '' ? 'px' : unit}`;
  }
  return css(["width:", ";height:", ";font-size:", ";"], $containerWidth, $containerHeight, fontSize);
};
const delayedVisibilityStyles = ({
  $delayShow
}) => {
  if ($delayShow && $delayShow !== 0) {
    return css(["animation:", " 1ms ", "ms linear 1 forwards;visibility:hidden;"], delayedVisibilityKeyframes, $delayShow);
  }
  return undefined;
};
const StyledSVG = styled.svg.attrs(props => ({
  'data-garden-version': '9.12.3',
  xmlns: 'http://www.w3.org/2000/svg',
  focusable: 'false',
  viewBox: `0 0 ${props.$width} ${props.$height}`,
  role: 'img'
})).withConfig({
  displayName: "StyledSVG",
  componentId: "sc-1xtc3kx-0"
})(["", ";", ";", ";", ";"], sizeStyles, colorStyles$1, componentStyles, delayedVisibilityStyles);

export { StyledSVG };
