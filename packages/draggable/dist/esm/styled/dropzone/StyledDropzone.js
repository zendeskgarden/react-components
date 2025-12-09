/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID$2 = 'dropzone';
const colorStyles = props => {
  const {
    $isDanger,
    $isDisabled,
    $isActive,
    $isHighlighted,
    theme
  } = props;
  const fgVariable = $isDanger ? 'foreground.danger' : 'foreground.primary';
  const fgActive = getColor({
    variable: fgVariable,
    theme
  });
  const borderActive = getColor({
    variable: $isDanger ? `border.dangerEmphasis` : 'border.primaryEmphasis',
    theme
  });
  let backgroundColor = 'transparent';
  let borderColor = getColor({
    variable: `border.emphasis`,
    theme
  });
  let color = getColor({
    variable: `foreground.subtle`,
    theme
  });
  if ($isDisabled) {
    backgroundColor = getColor({
      variable: 'background.disabled',
      theme
    });
    borderColor = getColor({
      variable: `border.disabled`,
      theme
    });
    color = getColor({
      variable: 'foreground.disabled',
      theme
    });
  } else if ($isActive || $isHighlighted) {
    color = $isHighlighted ? getColor({
      variable: fgVariable,
      light: {
        offset: 200
      },
      dark: {
        offset: -200
      },
      theme
    }) : fgActive;
    backgroundColor = getColor({
      variable: $isDanger ? 'background.dangerEmphasis' : 'background.primaryEmphasis',
      transparency: theme.opacity[100],
      dark: {
        offset: -100
      },
      theme
    });
    borderColor = borderActive;
  } else if ($isDanger) {
    borderColor = borderActive;
    color = fgActive;
  }
  return css(["border-color:", ";background-color:", ";color:", ";"], borderColor, backgroundColor, color);
};
const sizeStyles$1 = props => {
  const {
    theme,
    $isHighlighted
  } = props;
  const borderWidth = $isHighlighted ? math(`${theme.borderWidths.sm} * 2`) : theme.borderWidths.sm;
  return css(["border-width:", ";border-style:", ";border-radius:", ";padding:", "px;width:100%;font-family:", ";font-size:", ";"], borderWidth, $isHighlighted ? theme.borderStyles.solid : 'dashed', theme.borderRadii.md, $isHighlighted ? theme.space.base * 4 - 1 : theme.space.base * 4, theme.fonts.system, theme.fontSizes.md);
};
const StyledDropzone = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDropzone",
  componentId: "sc-1b7zuip-0"
})(["display:", ";flex-direction:", ";align-items:", ";justify-content:", ";transition:border-color 0.25s ease-in-out,background-color 0.25s ease-in-out,color 0.25s ease-in-out,z-index 0.25s ease-in-out;margin:0;text-align:", ";direction:", ";box-sizing:border-box;", " ", " ", ";"], p => (p.$hasMessage || p.$hasIcon) && 'flex', p => p.$hasMessage && p.$isVertical && 'column', p => (p.$hasMessage || p.$hasIcon) && 'center', p => (p.$hasMessage || p.$hasIcon) && 'center', p => p.$hasMessage && 'center', props => props.theme.rtl && 'rtl', sizeStyles$1, colorStyles, componentStyles);

export { StyledDropzone };
