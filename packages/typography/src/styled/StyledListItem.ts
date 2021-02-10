/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import {
  DEFAULT_THEME,
  getLineHeight,
  isRtl,
  retrieveComponentStyles
} from '@zendeskgarden/react-theming';
import { StyledOrderedList, StyledUnorderedList } from './StyledList';
import { StyledFont } from './StyledFont';

interface IStyledListItemProps {
  space?: 'small' | 'medium' | 'large';
}

const listItemPaddingStyles = (props: IStyledListItemProps & ThemeProps<DefaultTheme>) => {
  const base = props.theme.space.base;
  const paddingTop = props.space === 'large' ? `${base * 2}px` : `${base}px`;

  /**
   * 1. Prevent padding the very first list item.
   * 2. Restore padding on first list items that are nested.
   */
  return css`
    padding-top: ${paddingTop};

    /* stylelint-disable */
    ${StyledOrderedList} > &:first-child,
    ${StyledUnorderedList} > &:first-child {
      padding-top: 0; /* [1] */
    }

    ${StyledOrderedList} ${StyledOrderedList} > &:first-child,
    ${StyledOrderedList} ${StyledUnorderedList} > &:first-child,
    ${StyledUnorderedList} ${StyledUnorderedList} > &:first-child,
    ${StyledUnorderedList} ${StyledUnorderedList} > &:first-child {
      padding-top: ${paddingTop}; /* [2] */
    }
    /* stylelint-enable */
  `;
};

const listItemStyles = (props: IStyledListItemProps & ThemeProps<DefaultTheme>) => {
  return css`
    line-height: ${getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};

    ${props.space !== 'small' && listItemPaddingStyles(props)};
  `;
};

const ORDERED_ID = 'typography.ordered_list_item';

export const StyledOrderedListItem = styled(StyledFont as 'li').attrs({
  'data-garden-id': ORDERED_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'li'
})<IStyledListItemProps>`
  /* stylelint-disable */
  margin-${props => (isRtl(props) ? 'right' : 'left')}: ${props =>
  math(`${props.theme.space.base} * -1px`)};
  padding-${props => (isRtl(props) ? 'right' : 'left')}: ${props =>
  math(`${props.theme.space.base} * 1px`)};
  /* stylelint-enable */

  ${props => listItemStyles(props)};

  ${props => retrieveComponentStyles(ORDERED_ID, props)};
`;

StyledOrderedListItem.defaultProps = {
  space: 'medium',
  theme: DEFAULT_THEME
};

const UNORDERED_ID = 'typography.unordered_list_item';

export const StyledUnorderedListItem = styled(StyledFont as 'li').attrs({
  'data-garden-id': UNORDERED_ID,
  'data-garden-version': PACKAGE_VERSION,
  as: 'li'
})<IStyledListItemProps>`
  ${props => listItemStyles(props)};

  ${props => retrieveComponentStyles(UNORDERED_ID, props)};
`;

StyledUnorderedListItem.defaultProps = {
  space: 'medium',
  theme: DEFAULT_THEME
};
