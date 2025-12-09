/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { StyledBaseIcon, componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID$6 = 'accordions.rotate_icon';
const colorStyles$1 = ({
  $isCollapsible,
  $isHovered,
  $isRotated,
  theme
}) => {
  const showColor = $isCollapsible || !$isRotated;
  const color = getColor({
    theme,
    variable: showColor && $isHovered ? 'foreground.primary' : 'foreground.subtle'
  });
  return css(["color:", ";&:hover{color:", ";}"], color, showColor && color);
};
const StyledRotateIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID$6,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledRotateIcon",
  componentId: "sc-hp435q-0"
})(["transform:", ";transition:transform 0.25s ease-in-out,color 0.1s ease-in-out;box-sizing:content-box;padding:", ";width:", ";min-width:", ";height:", ";vertical-align:middle;", " ", ";"], props => props.$isRotated && `rotate(${props.theme.rtl ? '-' : '+'}180deg)`, props => props.$isCompact ? `${props.theme.space.base * 1.5}px ${props.theme.space.base * 3}px` : `${props.theme.space.base * 5}px`, props => props.theme.iconSizes.md, props => props.theme.iconSizes.md, props => props.theme.iconSizes.md, colorStyles$1, componentStyles);

export { StyledRotateIcon };
