/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { hideVisually, math } from 'polished';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { SIZE } from '../types/index.js';

const COMPONENT_ID = 'typography.font';
[...SIZE, 'extralarge', '2xlarge', '3xlarge'];
const THEME_SIZES = {
  small: 'sm',
  medium: 'md',
  large: 'lg',
  extralarge: 'xl',
  '2xlarge': 'xxl',
  '3xlarge': 'xxxl'
};
const fontStyles = _ref => {
  let {
    $hue,
    $isBold,
    $isMonospace,
    $size,
    theme
  } = _ref;
  const monospace = $isMonospace && ['inherit', 'small', 'medium', 'large'].indexOf($size) !== -1;
  const fontFamily = monospace && theme.fonts.mono;
  const direction = theme.rtl ? 'rtl' : 'ltr';
  let fontSize;
  let fontWeight;
  let lineHeight;
  let color;
  if (monospace) {
    if ($size === 'inherit') {
      fontSize = 'calc(1em - 1px)';
      lineHeight = 'normal';
    } else {
      const themeSize = THEME_SIZES[$size];
      fontSize = math(`${theme.fontSizes[themeSize]} - 1px`);
      lineHeight = math(`${theme.lineHeights[themeSize]} - 1px`);
    }
  } else if ($size !== 'inherit') {
    const themeSize = THEME_SIZES[$size];
    fontSize = theme.fontSizes[themeSize];
    lineHeight = theme.lineHeights[themeSize];
  }
  if ($isBold === true) {
    fontWeight = theme.fontWeights.semibold;
  } else if ($isBold === false || $size !== 'inherit') {
    fontWeight = theme.fontWeights.regular;
  }
  if ($hue) {
    const options = $hue.includes('.') ? {
      variable: $hue,
      theme
    } : {
      hue: $hue,
      theme
    };
    color = getColor(options);
  }
  return css(["transition:color 0.1s ease-in-out;line-height:", ";color:", ";font-family:", ";font-size:", ";font-weight:", ";direction:", ";"], lineHeight, color, fontFamily, fontSize, fontWeight, direction);
};
const StyledFont = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  $size: props.$size ?? 'inherit'
})).withConfig({
  displayName: "StyledFont",
  componentId: "sc-1iildbo-0"
})(["", ";&[hidden]{display:inline;", ";}", ";"], props => !props.hidden && fontStyles(props), hideVisually(), componentStyles);

export { StyledFont, THEME_SIZES };
