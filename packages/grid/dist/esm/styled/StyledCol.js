/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'grid.col';
const colorStyles = _ref => {
  let {
    theme
  } = _ref;
  const backgroundColor = getColor({
    theme,
    variable: 'background.primaryEmphasis',
    dark: {
      transparency: theme.opacity[200]
    },
    light: {
      transparency: theme.opacity[100]
    }
  });
  return css(["background-clip:content-box;background-color:", ";"], backgroundColor);
};
const flexStyles = (size, alignSelf, textAlign, offset, order, props) => {
  const margin = offset && `${math(`${offset} / ${props.$columns} * 100`)}%`;
  let flexBasis;
  let flexGrow;
  let maxWidth;
  let width;
  if (typeof size === 'boolean') {
    flexBasis = 0;
    flexGrow = 1;
    maxWidth = '100%';
  } else if (size === 'auto') {
    flexBasis = 'auto';
    flexGrow = 0;
    maxWidth = '100%';
    width = 'auto';
  } else if (size !== undefined) {
    flexBasis = `${math(`${size} / ${props.$columns} * 100`)}%`;
    flexGrow = 0;
    maxWidth = flexBasis;
  }
  let horizontalAlign;
  if (textAlign === 'start') {
    horizontalAlign = props.theme.rtl ? 'right' : 'left';
  } else if (textAlign === 'end') {
    horizontalAlign = props.theme.rtl ? 'left' : 'right';
  } else {
    horizontalAlign = textAlign;
  }
  let flexOrder;
  if (order === 'first') {
    flexOrder = -1;
  } else if (order === 'last') {
    flexOrder = math(`${props.$columns} + 1`);
  } else {
    flexOrder = order;
  }
  return css(["flex-basis:", ";flex-grow:", ";flex-shrink:", ";align-self:", ";order:", ";margin-", ":", ";width:", ";max-width:", ";text-align:", ";"], flexBasis, flexGrow, size && 0, alignSelf === 'start' || alignSelf === 'end' ? `flex-${alignSelf}` : alignSelf, flexOrder, props.theme.rtl ? 'right' : 'left', margin, width, maxWidth, horizontalAlign);
};
const mediaStyles = (minWidth, size, alignSelf, textAlign, offset, order, props) => {
  return css(["@media (min-width:", "){", ";}"], minWidth, flexStyles(size, alignSelf, textAlign, offset, order, props));
};
const sizeStyles = _ref2 => {
  let {
    theme,
    $gutters
  } = _ref2;
  const padding = $gutters ? math(`${theme.space[$gutters]} / 2`) : 0;
  return css(["padding-right:", ";padding-left:", ";"], padding, padding);
};
const StyledCol = styled.div.attrs(props => ({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  $columns: props.$columns ?? 12
})).withConfig({
  displayName: "StyledCol",
  componentId: "sc-inuw62-0"
})(["box-sizing:border-box;width:100%;", ";", ";", ";", ";", ";", ";", ";", ";", ";"], props => flexStyles(!props.$sizeAll && (props.$xs || props.$sm || props.$md || props.$lg || props.$xl) ? undefined : props.$sizeAll || false, props.$alignSelf, props.$textAlign, props.$offset, props.$order, props), sizeStyles, props => props.$debug && colorStyles(props), props => mediaStyles(props.theme.breakpoints.xs, props.$xs, props.$alignSelfXs, props.$textAlignXs, props.$offsetXs, props.$orderXs, props), props => mediaStyles(props.theme.breakpoints.sm, props.$sm, props.$alignSelfSm, props.$textAlignSm, props.$offsetSm, props.$orderSm, props), props => mediaStyles(props.theme.breakpoints.md, props.$md, props.$alignSelfMd, props.$textAlignMd, props.$offsetMd, props.$orderMd, props), props => mediaStyles(props.theme.breakpoints.lg, props.$lg, props.$alignSelfLg, props.$textAlignLg, props.$offsetLg, props.$orderLg, props), props => mediaStyles(props.theme.breakpoints.xl, props.$xl, props.$alignSelfXl, props.$textAlignXl, props.$offsetXl, props.$orderXl, props), componentStyles);

export { StyledCol };
