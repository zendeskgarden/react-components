/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'grid.row';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const borderColor = getColor({
    theme,
    hue: 'mint',
    shade: 700,
    transparency: theme.opacity[600]
  });
  const borderWidth = theme.borderWidths.sm;
  return css(["box-shadow:inset 0 ", " 0 0 ", ",inset 0 -", " 0 0 ", ";"], borderWidth, borderColor, borderWidth, borderColor);
};
const flexStyles = (alignItems, justifyContent, wrap) => {
  let flexAlignItems;
  let flexJustifyContent;
  if (alignItems === 'start' || alignItems === 'end') {
    flexAlignItems = `flex-${alignItems}`;
  } else {
    flexAlignItems = alignItems;
  }
  if (justifyContent === 'start' || justifyContent === 'end') {
    flexJustifyContent = `flex-${justifyContent}`;
  } else if (justifyContent === 'between' || justifyContent === 'around') {
    flexJustifyContent = `space-${justifyContent}`;
  } else {
    flexJustifyContent = justifyContent;
  }
  return css(["flex-wrap:", ";align-items:", ";justify-content:", ";"], wrap, flexAlignItems, flexJustifyContent);
};
const mediaStyles = (minWidth, alignItems, justifyContent, wrap) => {
  return css(["@media (min-width:", "){", ";}"], minWidth, flexStyles(alignItems, justifyContent, wrap));
};
const sizeStyles = _ref2 => {
  let {
    theme,
    $gutters
  } = _ref2;
  const margin = $gutters ? math(`${theme.space[$gutters]} / 2`) : 0;
  return css(["margin-right:-", ";margin-left:-", ";"], margin, margin);
};
const StyledRow = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  $wrapAll: props.$wrapAll ?? 'wrap'
})).withConfig({
  displayName: "StyledRow",
  componentId: "sc-xjsdg1-0"
})(["display:flex;box-sizing:border-box;", " ", ";", ";", ";", ";", ";", ";", ";", ";"], props => flexStyles(props.$alignItems, props.$justifyContent, props.$wrapAll), sizeStyles, props => props.$debug && colorStyles(props), props => mediaStyles(props.theme.breakpoints.xs, props.$alignItemsXs, props.$justifyContentXs, props.$wrapXs), props => mediaStyles(props.theme.breakpoints.sm, props.$alignItemsSm, props.$justifyContentSm, props.$wrapSm), props => mediaStyles(props.theme.breakpoints.md, props.$alignItemsMd, props.$justifyContentMd, props.$wrapMd), props => mediaStyles(props.theme.breakpoints.lg, props.$alignItemsLg, props.$justifyContentLg, props.$wrapLg), props => mediaStyles(props.theme.breakpoints.xl, props.$alignItemsXl, props.$justifyContentXl, props.$wrapXl), componentStyles);

export { StyledRow };
