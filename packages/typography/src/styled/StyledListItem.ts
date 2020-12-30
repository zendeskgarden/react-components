/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, ThemeProps, DefaultTheme } from 'styled-components';
import { math } from 'polished';
import { DEFAULT_THEME, isRtl, retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { StyledFont } from './StyledFont';

const listItemContentStyles = (
  props: IStyledOrderedListItemContentProps & ThemeProps<DefaultTheme>
) => {
  let padding;

  switch (props.space) {
    case 'small':
      padding = '0';
      break;
    case 'large':
      padding = `${math(`${props.theme.space.base} * 1px`)} 0`;
      break;
    case 'medium':
    default:
      padding = `${math(`${props.theme.space.base} * 0.5px`)} 0`;
      break;
  }

  return css`
    padding: ${padding};
  `;
};

const ORDERED_ID = 'typography.ordered_list_item';

export const StyledOrderedListItem = styled.li.attrs({
  'data-garden-id': ORDERED_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  /* stylelint-disable */
  margin-${props => (isRtl(props) ? 'right' : 'left')}: ${props =>
  math(`${props.theme.space.base} * -1px`)};
  padding-${props => (isRtl(props) ? 'right' : 'left')}: ${props =>
  math(`${props.theme.space.base} * 1px`)};
  /* stylelint-enable */

  ${props => retrieveComponentStyles(ORDERED_ID, props)};
`;

StyledOrderedListItem.defaultProps = {
  theme: DEFAULT_THEME
};

interface IStyledOrderedListItemContentProps {
  space?: 'small' | 'medium' | 'large';
}

export const StyledOrderedListItemContent = styled(StyledFont)<IStyledOrderedListItemContentProps>`
  ${props => listItemContentStyles(props)};
`;

StyledOrderedListItemContent.defaultProps = {
  theme: DEFAULT_THEME,
  space: 'medium'
};

const UNORDERED_ID = 'typography.unordered_list_item';

export const StyledUnorderedListItem = styled.li.attrs({
  'data-garden-id': UNORDERED_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  ${props => retrieveComponentStyles(UNORDERED_ID, props)};
`;

StyledUnorderedListItem.defaultProps = {
  theme: DEFAULT_THEME
};

export const StyledUnorderedListItemContent = styled(
  StyledFont
)<IStyledOrderedListItemContentProps>`
  ${props => listItemContentStyles(props)};
`;

StyledUnorderedListItemContent.defaultProps = {
  theme: DEFAULT_THEME,
  space: 'medium'
};
