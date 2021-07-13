/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.file_list.item';

interface IStyledFileListItemProps {
  isDragging?: boolean;
  isCompact?: boolean;
}

export const StyledFileListItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})<IStyledFileListItemProps>`
  height: ${props => props.theme.space.base * 10}px;

  &:not(:first-child) {
    margin-top: ${props => props.theme.space.base * 5}px;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFileListItem.defaultProps = {
  theme: DEFAULT_THEME
};
