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
import { StyledFont } from './StyledFont';

interface IStyledListItemProps {
  space?: 'small' | 'medium' | 'large';
}

const listItemStyles = (props: IStyledListItemProps & ThemeProps<DefaultTheme>) => {
  let markerLineHeight;

  switch (props.space) {
    case 'small':
      break;
    case 'large':
      markerLineHeight = `${props.theme.space.base * 7}px`;
      break;
    case 'medium':
    default:
      markerLineHeight = `${props.theme.space.base * 6}px`;
      break;
  }

  return css`
    line-height: ${getLineHeight(props.theme.lineHeights.md, props.theme.fontSizes.md)};

    &::marker {
      line-height: ${markerLineHeight};
    }
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
