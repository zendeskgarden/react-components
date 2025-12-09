/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { parseToRgb, readableColor } from 'polished';
import { focusStyles, componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledButtonPreview } from '../ColorPickerDialog/StyledButtonPreview.js';

const COMPONENT_ID = 'colorpickers.color_swatch_label';
const colorStyles = _ref => {
  let {
    $backgroundColor,
    theme
  } = _ref;
  const {
    alpha
  } = parseToRgb($backgroundColor);
  const returnIfLightColor = getColor({
    theme,
    hue: 'neutralHue',
    shade: 900
  });
  let foregroundColor = returnIfLightColor;
  if (alpha === undefined || alpha >= 0.4) {
    const returnIfDarkColor = getColor({
      theme,
      hue: 'white'
    });
    foregroundColor = readableColor($backgroundColor, returnIfLightColor, returnIfDarkColor, false );
  }
  return `
    color: ${foregroundColor};
  `;
};
const StyledColorSwatchLabel = styled(StyledButtonPreview).attrs({
  as: 'label',
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledColorSwatchLabel",
  componentId: "sc-1aghocg-0"
})(["position:relative;top:0;border-radius:", ";", ";", " ", ";"], props => props.theme.borderRadii.md, colorStyles, props => focusStyles({
  theme: props.theme,
  selector: '&:has(:focus-visible)'
}), componentStyles);

export { StyledColorSwatchLabel };
