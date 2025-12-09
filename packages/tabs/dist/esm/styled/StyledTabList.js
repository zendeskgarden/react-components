/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor, getLineHeight } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'tabs.tablist';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const borderColor = getColor({
    theme,
    variable: 'border.default'
  });
  const foregroundColor = getColor({
    theme,
    variable: 'foreground.default'
  });
  return css(["transition:border-color 0.25s ease-in-out;color-scheme:only ", ";border-bottom-color:", ";color:", ";"], p => p.theme.colors.base, borderColor, foregroundColor);
};
const sizeStyles = _ref2 => {
  let {
    theme,
    $isVertical
  } = _ref2;
  const marginBottom = $isVertical ? 0 : `${theme.space.base * 5}px`;
  const borderBottom = $isVertical ? undefined : theme.borderWidths.sm;
  const fontSize = theme.fontSizes.md;
  const lineHeight = getLineHeight(theme.space.base * 5, fontSize);
  return css(["margin-top:0;margin-bottom:", ";border-bottom-width:", ";padding:0;line-height:", ";font-size:", ";"], marginBottom, borderBottom, lineHeight, fontSize);
};
const StyledTabList = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledTabList",
  componentId: "sc-wa5aaj-0"
})(["display:", ";border-bottom:", ";vertical-align:", ";white-space:nowrap;", ";", ";", ";"], props => props.$isVertical ? 'table-cell' : 'block', props => props.$isVertical ? 'none' : props.theme.borderStyles.solid, props => props.$isVertical ? 'top' : undefined, sizeStyles, colorStyles, componentStyles);

export { StyledTabList };
