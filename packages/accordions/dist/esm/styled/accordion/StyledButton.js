/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { getLineHeight, componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID$9 = 'accordions.button';
const colorStyles$2 = ({
  $isCollapsible,
  $isExpanded,
  $isHovered,
  theme
}) => {
  const showColor = $isCollapsible || !$isExpanded;
  const color = getColor({
    theme,
    variable: showColor && $isHovered ? 'foreground.primary' : 'foreground.default'
  });
  return css(["color:", ";&:hover{cursor:", ";color:", ";}"], color, showColor && 'pointer', showColor && color);
};
const StyledButton = styled.button.attrs({
  'data-garden-id': COMPONENT_ID$9,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledButton",
  componentId: "sc-xj3hy7-0"
})(["transition:color 0.1s ease-in-out;outline:none;border:none;background:transparent;padding:", ";width:100%;text-align:", ";line-height:", ";font-family:inherit;font-size:", ";font-weight:", ";", " &::-moz-focus-inner{border:0;}&:hover{cursor:", ";}", ";"], props => props.$isCompact ? `${props.theme.space.base * 2}px ${props.theme.space.base * 3}px` : `${props.theme.space.base * 5}px`, props => props.theme.rtl ? 'right' : 'left', props => getLineHeight(props.theme.space.base * 5, props.theme.fontSizes.md), props => props.theme.fontSizes.md, props => props.theme.fontWeights.semibold, colorStyles$2, props => (props.$isCollapsible || !props.$isExpanded) && 'pointer', componentStyles);

export { COMPONENT_ID$9 as COMPONENT_ID, StyledButton };
