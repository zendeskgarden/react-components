/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { stripUnit } from 'polished';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID$f = 'colorpickers.colorpicker_colorwell_thumb';
const colorStyles$1 = ({
  theme
}) => {
  const borderColor = getColor({
    theme,
    hue: 'white'
  });
  const boxShadow = `${theme.shadows.xs(getColor({
    theme,
    hue: 'black'
  }))}`;
  return css(["border-color:", ";box-shadow:", ";"], borderColor, boxShadow);
};
const sizeStyles$2 = ({
  theme
}) => {
  const borderWidth = stripUnit(theme.borderWidths.sm) * 2;
  const size = theme.space.base * 5;
  const translateValue = size / -2;
  return css(["transform:translate(", "px,", "px);box-sizing:border-box;border-width:", "px;width:", "px;height:", "px;"], translateValue, translateValue, borderWidth, size, size);
};
const StyledColorWellThumb = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID$f,
  'data-garden-version': '9.12.3',
  'data-test-id': 'colorwell-thumb',
  style: {
    top: `${props.$top}%`,
    left: `${props.$left}%`
  }
})).withConfig({
  displayName: "StyledColorWellThumb",
  componentId: "sc-1npyab0-0"
})(["position:absolute;border:", ";border-radius:50%;", " ", " ", ";"], props => props.theme.borders.sm, sizeStyles$2, colorStyles$1, componentStyles);

export { StyledColorWellThumb };
