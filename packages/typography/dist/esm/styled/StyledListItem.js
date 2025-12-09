/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { math } from 'polished';
import { componentStyles, getLineHeight } from '@zendeskgarden/react-theming';
import { StyledOrderedList, StyledUnorderedList } from './StyledList.js';
import { StyledFont } from './StyledFont.js';

const listItemPaddingStyles = props => {
  const base = props.theme.space.base;
  const paddingTop = props.$space === 'large' ? `${base * 2}px` : `${base}px`;
  return css(["padding-top:", ";", " > &:first-child,", " > &:first-child{padding-top:0;}", " ", " > &:first-child,", " ", " > &:first-child,", " ", " > &:first-child,", " ", " > &:first-child{padding-top:", ";}"], paddingTop, StyledOrderedList, StyledUnorderedList, StyledOrderedList, StyledOrderedList, StyledOrderedList, StyledUnorderedList, StyledUnorderedList, StyledUnorderedList, StyledUnorderedList, StyledOrderedList, paddingTop);
};
const listItemStyles = props => {
  return css(["line-height:", ";", ";"], getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md), props.$space !== 'small' && listItemPaddingStyles(props));
};
const ORDERED_ID = 'typography.ordered_list_item';
const StyledOrderedListItem = styled(StyledFont).attrs(props => ({
  'data-garden-id': ORDERED_ID,
  'data-garden-version': '9.12.3',
  as: 'li',
  $space: props.$space ?? 'medium'
})).withConfig({
  displayName: "StyledListItem__StyledOrderedListItem",
  componentId: "sc-9rsipg-0"
})(["margin-", ":", ";padding-", ":", ";", ";", ";"], props => props.theme.rtl ? 'right' : 'left', props => math(`${props.theme.space.base} * -1px`), props => props.theme.rtl ? 'right' : 'left', props => math(`${props.theme.space.base} * 1px`), listItemStyles, componentStyles);
const UNORDERED_ID = 'typography.unordered_list_item';
const StyledUnorderedListItem = styled(StyledFont).attrs(props => ({
  'data-garden-id': UNORDERED_ID,
  'data-garden-version': '9.12.3',
  as: 'li',
  $space: props.$space ?? 'medium'
})).withConfig({
  displayName: "StyledListItem__StyledUnorderedListItem",
  componentId: "sc-9rsipg-1"
})(["", ";", ";"], listItemStyles, componentStyles);

export { StyledOrderedListItem, StyledUnorderedListItem };
