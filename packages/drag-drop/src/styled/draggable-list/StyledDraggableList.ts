/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled, { ThemeProps, DefaultTheme } from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'draggable_list';

export interface IStyledDraggableListProps {
  isHorizontal?: boolean;
}

export const StyledDraggableList = styled.ul.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledDraggableListProps & ThemeProps<DefaultTheme>>`
  display: flex;
  flex-direction: ${p => (p.isHorizontal ? 'row' : 'column')};

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDraggableList.defaultProps = {
  theme: DEFAULT_THEME
};
