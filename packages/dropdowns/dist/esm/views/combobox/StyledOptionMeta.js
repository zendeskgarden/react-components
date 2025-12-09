/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID$f = 'dropdowns.combobox.option.meta';
const colorStyles$4 = ({
  theme,
  $isDisabled
}) => {
  const variable = $isDisabled ? 'foreground.disabled' : 'foreground.subtle';
  const color = getColor({
    theme,
    variable
  });
  return css(["color:", ";"], color);
};
const sizeStyles$2 = props => {
  const lineHeight = props.theme.lineHeights.sm;
  const fontSize = props.theme.fontSizes.sm;
  return css(["line-height:", ";font-size:", ";"], lineHeight, fontSize);
};
const StyledOptionMeta = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$f,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledOptionMeta",
  componentId: "sc-j6pu10-0"
})(["transition:color 0.25s ease-in-out;font-weight:", ";", ";", ";", ";"], props => props.theme.fontWeights.regular, sizeStyles$2, colorStyles$4, componentStyles);

export { StyledOptionMeta };
