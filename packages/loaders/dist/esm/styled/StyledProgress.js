/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const sizeToHeight = ($size, theme) => {
  switch ($size) {
    case 'small':
      return theme.space.base / 2;
    case 'medium':
      return theme.space.base * 1.5;
    default:
      return theme.space.base * 3;
  }
};
const sizeToBorderRadius = ($size, theme) => sizeToHeight($size, theme) / 2;
const PROGRESS_BACKGROUND_COMPONENT_ID = 'loaders.progress_background';
const colorStyles$2 = ({
  theme,
  $color
}) => {
  const backgroundColor = getColor({
    theme,
    transparency: theme.opacity[200],
    light: {
      hue: 'neutralHue',
      shade: 700
    },
    dark: {
      hue: 'white'
    }
  });
  let options;
  if ($color) {
    options = $color.includes('.') ? {
      variable: $color,
      theme
    } : {
      hue: $color,
      theme
    };
  } else {
    options = {
      variable: 'border.successEmphasis',
      theme
    };
  }
  const foregroundColor = getColor(options);
  return css(["background-color:", ";color:", ";"], backgroundColor, foregroundColor);
};
const StyledProgressBackground = styled.div.attrs({
  'data-garden-id': PROGRESS_BACKGROUND_COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledProgress__StyledProgressBackground",
  componentId: "sc-2g8w4s-0"
})(["margin:", "px 0;border-radius:", "px;", ";", ""], props => props.theme.space.base * 2, props => sizeToBorderRadius(props.$size, props.theme), colorStyles$2, componentStyles);
const PROGESS_INDICATOR_COMPONENT_ID = 'loaders.progress_indicator';
const StyledProgressIndicator = styled.div.attrs({
  'data-garden-id': PROGESS_INDICATOR_COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledProgress__StyledProgressIndicator",
  componentId: "sc-2g8w4s-1"
})(["transition:width 0.1s ease-in-out;border-radius:", "px;background:currentcolor;width:", "%;height:", "px;", ""], props => sizeToBorderRadius(props.$size, props.theme), props => props.$value, props => sizeToHeight(props.$size, props.theme), componentStyles);

export { StyledProgressBackground, StyledProgressIndicator };
