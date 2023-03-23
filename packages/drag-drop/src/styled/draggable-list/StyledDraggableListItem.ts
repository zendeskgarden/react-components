/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { DefaultTheme, ThemeProps } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'draggable_list.item';

export interface IStyledDraggableListItemProps extends ThemeProps<DefaultTheme> {
  isHorizontal?: boolean;
}

export const StyledDraggableListItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledDraggableListItemProps>`
  display: flex;

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDraggableListItem.defaultProps = {
  theme: DEFAULT_THEME
};
