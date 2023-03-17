/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'draggable_list.item';

export const StyledDraggableListItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  &:not(:first-child) {
    margin-top: ${props => props.theme.space.xs};
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledDraggableListItem.defaultProps = {
  theme: DEFAULT_THEME
};
