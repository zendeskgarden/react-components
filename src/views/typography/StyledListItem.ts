/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { math } from 'polished';
import styled, { css } from 'styled-components';

import { componentStyles } from '../../theming/utils/componentStyles';
import getLineHeight from '../../theming/utils/getLineHeight';
import { Size } from '../../types/elements';
import type { IStyledBaseProps } from '../../types/views';
import { StyledFont } from './StyledFont';
import { StyledOrderedList, StyledUnorderedList } from './StyledList';

interface IStyledListItemProps {
  $space?: Size;
}

const listItemPaddingStyles = (props: IStyledListItemProps & IStyledBaseProps) => {
  const base = props.theme.space.base;
  const paddingTop = props.$space === 'large' ? `${base * 2}px` : `${base}px`;

  /**
   * 1. Prevent padding the very first list item.
   * 2. Restore padding on first list items that are nested.
   */
  return css`
    padding-top: ${paddingTop};

    ${StyledOrderedList} > &:first-child,
    ${StyledUnorderedList} > &:first-child {
      padding-top: 0; /* [1] */
    }

    ${StyledOrderedList} ${StyledOrderedList} > &:first-child,
    ${StyledOrderedList} ${StyledUnorderedList} > &:first-child,
    ${StyledUnorderedList} ${StyledUnorderedList} > &:first-child,
    ${StyledUnorderedList} ${StyledOrderedList} > &:first-child {
      padding-top: ${paddingTop}; /* [2] */
    }
  `;
};

const listItemStyles = (props: IStyledListItemProps & IStyledBaseProps) => {
  return css`
    line-height: ${getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};

    ${props.$space !== 'small' && listItemPaddingStyles(props)};
  `;
};

export const StyledOrderedListItem = styled(StyledFont as 'li')<IStyledListItemProps>`
  margin-${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
    math(`${props.theme.space.base} * -1px`)};
  padding-${props => (props.theme.rtl ? 'right' : 'left')}: ${props =>
    math(`${props.theme.space.base} * 1px`)};

  ${listItemStyles};

  ${componentStyles};
`;

export const StyledUnorderedListItem = styled(StyledFont as 'li')<IStyledListItemProps>`
  ${listItemStyles};

  ${componentStyles};
`;
