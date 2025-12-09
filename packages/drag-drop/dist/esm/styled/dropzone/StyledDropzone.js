/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { rgba, math } from 'polished';
import { retrieveComponentStyles, DEFAULT_THEME, getColorV8 } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'dropzone';
const colorStyles = props => {
  const {
    isDanger,
    isDisabled,
    isActive,
    isHighlighted,
    theme
  } = props;
  const hue = isDanger ? 'dangerHue' : 'primaryHue';
  const baseColor = getColorV8(hue, 600, theme);
  const neutralColor = getColorV8('neutralHue', 600, theme);
  let backgroundColor = 'transparent';
  let borderColor = neutralColor;
  let color = neutralColor;
  if (isDisabled) {
    backgroundColor = getColorV8('neutralHue', 200, theme);
    borderColor = getColorV8('neutralHue', 300, theme);
    color = getColorV8('neutralHue', 400, theme);
  } else if (isActive || isHighlighted) {
    color = isHighlighted ? getColorV8(hue, 800, theme) : baseColor;
    backgroundColor = rgba(baseColor, 0.08);
    borderColor = baseColor;
  } else if (isDanger) {
    borderColor = baseColor;
    color = baseColor;
  }
  return css(["border-color:", ";background-color:", ";color:", ";"], borderColor, backgroundColor, color);
};
const sizeStyles = props => {
  const {
    theme,
    isHighlighted
  } = props;
  const borderWidth = isHighlighted ? math(`${theme.borderWidths.sm} * 2`) : theme.borderWidths.sm;
  return css(["border-width:", ";border-style:", ";border-radius:", ";padding:", "px;width:100%;font-family:", ";font-size:", ";"], borderWidth, isHighlighted ? theme.borderStyles.solid : 'dashed', theme.borderRadii.md, isHighlighted ? theme.space.base * 4 - 1 : theme.space.base * 4, theme.fonts.system, theme.fontSizes.md);
};
const StyledDropzone = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '8.76.9'
}).withConfig({
  displayName: "StyledDropzone",
  componentId: "sc-19dn146-0"
})(["display:", ";flex-direction:", ";align-items:", ";justify-content:", ";transition:border-color 0.25s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,z-index 0.25s ease-in-out;margin:0;text-align:", ";direction:", ";box-sizing:border-box;", " ", " ", ";"], p => (p.hasMessage || p.hasIcon) && 'flex', p => p.hasMessage && p.isVertical && 'column', p => (p.hasMessage || p.hasIcon) && 'center', p => (p.hasMessage || p.hasIcon) && 'center', p => p.hasMessage && 'center', props => props.theme.rtl && 'rtl', sizeStyles, colorStyles, props => retrieveComponentStyles(COMPONENT_ID, props));
StyledDropzone.defaultProps = {
  theme: DEFAULT_THEME
};

export { StyledDropzone };
