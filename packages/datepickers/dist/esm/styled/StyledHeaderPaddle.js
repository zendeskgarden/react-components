/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const sizeStyles$3 = ({
  $isCompact,
  theme
}) => {
  const iconSize = theme.iconSizes.md;
  const size = theme.space.base * ($isCompact ? 8 : 10);
  return css(["width:", "px;height:", "px;svg{width:", ";height:", ";}"], size, size, iconSize, iconSize);
};
const colorStyles$2 = ({
  theme
}) => {
  const foreground = getColor({
    variable: 'foreground.subtle',
    theme
  });
  const foregroundHover = getColor({
    variable: 'foreground.subtle',
    light: {
      offset: 100
    },
    dark: {
      offset: -100
    },
    theme
  });
  const backgroundHover = getColor({
    variable: 'background.primaryEmphasis',
    theme,
    transparency: theme.opacity[100]
  });
  const foregroundActive = getColor({
    variable: 'foreground.subtle',
    light: {
      offset: 200
    },
    dark: {
      offset: -200
    },
    theme
  });
  const backgroundActive = getColor({
    variable: 'background.primaryEmphasis',
    theme,
    transparency: theme.opacity[200]
  });
  return css(["color:", ";&:hover{background-color:", ";color:", ";}&:active{background-color:", ";color:", ";}"], foreground, backgroundHover, foregroundHover, backgroundActive, foregroundActive);
};
const COMPONENT_ID$6 = 'datepickers.header_paddle';
const StyledHeaderPaddle = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderPaddle",
  componentId: "sc-2oqh0g-0"
})(["display:flex;align-items:center;justify-content:center;transform:", ";border-radius:50%;cursor:pointer;&[aria-hidden]{visibility:hidden;}", " ", " ", ";"], props => props.theme.rtl && 'rotate(180deg)', sizeStyles$3, colorStyles$2, componentStyles);

export { StyledHeaderPaddle };
