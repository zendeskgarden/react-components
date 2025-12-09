/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledFont } from './StyledFont.js';

const COMPONENT_ID$8 = 'typography.code';
const colorStyles$3 = ({
  $hue,
  theme
}) => {
  const bgColorArgs = {
    theme,
    light: {
      offset: 100
    },
    dark: {
      offset: -100
    }
  };
  const fgColorArgs = {
    theme
  };
  switch ($hue) {
    case 'green':
      bgColorArgs.variable = 'background.success';
      fgColorArgs.variable = 'foreground.successEmphasis';
      break;
    case 'red':
      bgColorArgs.variable = 'background.danger';
      fgColorArgs.variable = 'foreground.dangerEmphasis';
      break;
    case 'yellow':
      bgColorArgs.variable = 'background.warning';
      fgColorArgs.variable = 'foreground.warningEmphasis';
      break;
    default:
      fgColorArgs.variable = 'foreground.default';
      bgColorArgs.variable = 'background.subtle';
      break;
  }
  const backgroundColor = getColor(bgColorArgs);
  const foregroundColor = getColor(fgColorArgs);
  return css(["background-color:", ";color:", ";a &{color:inherit;}"], backgroundColor, foregroundColor);
};
const StyledCode = styled(StyledFont).attrs(props => ({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3',
  as: 'code',
  $isMonospace: true,
  $hue: props.$hue ?? 'grey',
  $size: props.$size ?? 'inherit'
})).withConfig({
  displayName: "StyledCode",
  componentId: "sc-l8yvmf-0"
})(["border-radius:", ";padding:1.5px;", ";", ";"], props => props.theme.borderRadii.sm, props => colorStyles$3(props), componentStyles);

export { StyledCode };
