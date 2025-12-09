/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { rgba, hsl } from 'polished';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker_colorwell';
const background = props => {
  const blackAlpha = rgba(props.theme.palette.black, 0.9);
  const black = `linear-gradient(0deg, ${props.theme.palette.black}, ${blackAlpha} 1%, transparent 99%)`;
  const whiteAngle = `${props.theme.rtl ? -90 : 90}deg`;
  const white = `linear-gradient(${whiteAngle}, ${props.theme.palette.white} 1%, transparent)`;
  const colorValue = hsl(props.$hue, 1, 0.5);
  const color = `linear-gradient(${colorValue}, ${colorValue})`;
  return `${black}, ${white}, ${color}`;
};
const StyledColorWell = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  'data-test-id': 'colorwell',
  style: {
    background: background(props)
  }
})).withConfig({
  displayName: "StyledColorWell",
  componentId: "sc-1gg9z8m-0"
})(["position:relative;margin-bottom:", "px;cursor:pointer;height:208px;overflow:hidden;", ";"], props => props.theme.space.base * 2, componentStyles);

export { StyledColorWell };
