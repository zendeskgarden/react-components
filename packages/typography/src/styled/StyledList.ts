/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { css, DefaultTheme, ThemeProps } from 'styled-components';
import { retrieveComponentStyles } from '@zendeskgarden/react-theming';
import { IOrderedListProps, IUnorderedListProps } from '../types';

const listStyles = (props: { $listType?: string } & ThemeProps<DefaultTheme>) => {
  const rtl = props.theme.rtl;

  return css`
    direction: ${rtl ? 'rtl' : 'ltr'};
    margin: 0;
    margin-${rtl ? 'right' : 'left'}: 24px;
    padding: 0;
    list-style-position: outside;
    list-style-type: ${props.$listType};
  `;
};

const ORDERED_ID = 'typography.ordered_list';

interface IStyledListProps {
  $listType?: IOrderedListProps['type'];
}

export const StyledOrderedList = styled.ol.attrs({
  'data-garden-id': ORDERED_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledListProps>`
  ${props => listStyles(props)};
  ${props => retrieveComponentStyles(ORDERED_ID, props)};
`;

const UNORDERED_ID = 'typography.unordered_list';

interface IStyledUnorderedListProps {
  $listType?: IUnorderedListProps['type'];
}

export const StyledUnorderedList = styled.ul.attrs({
  'data-garden-id': UNORDERED_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledUnorderedListProps>`
  ${props => listStyles(props)};
  ${props => retrieveComponentStyles(UNORDERED_ID, props)};
`;
