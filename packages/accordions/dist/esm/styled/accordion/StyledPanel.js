/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getLineHeight, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID$b = 'accordions.panel';
const colorStyles$3 = ({
  theme,
  $isBare
}) => {
  return css(["border-bottom-color:", ";"], $isBare ? 'transparent' : getColor({
    theme,
    variable: 'border.default'
  }));
};
const sizeStyles = props => {
  const {
    theme,
    $isCompact,
    $isExpanded
  } = props;
  const {
    base
  } = theme.space;
  let paddingTop = base * 2;
  let paddingHorizontal = base * 5;
  let paddingBottom = base * 8;
  if ($isCompact) {
    paddingTop = base * 2;
    paddingHorizontal = base * 3;
    paddingBottom = base * 4;
  }
  if ($isExpanded === false) {
    paddingTop = 0;
    paddingBottom = 0;
  }
  return css(["grid-template-rows:", "fr;border-bottom:", ";padding:", "px ", "px ", "px;line-height:", ";font-size:", ";"], $isExpanded ? 1 : 0, theme.borders.sm, paddingTop, paddingHorizontal, paddingBottom, getLineHeight(base * 5, theme.fontSizes.md), theme.fontSizes.md);
};
const StyledPanel = styled.section.attrs(props => ({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '9.12.3',
  $isAnimated: props.$isAnimated ?? true
})).withConfig({
  displayName: "StyledPanel",
  componentId: "sc-1piryze-0"
})(["display:grid;transition:", ";overflow:hidden;", " ", " ", ";"], props => props.$isAnimated && 'padding 0.25s ease-in-out, grid-template-rows 0.25s ease-in-out', sizeStyles, colorStyles$3, componentStyles);

export { StyledPanel };
