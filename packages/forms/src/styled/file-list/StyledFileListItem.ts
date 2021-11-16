/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import styled from 'styled-components';
import { retrieveComponentStyles, DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { StyledFileList } from './StyledFileList';
import { StyledFileUpload } from '../file-upload/StyledFileUpload';

const COMPONENT_ID = 'forms.file_list.item';

export const StyledFileListItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': PACKAGE_VERSION
})`
  &:not(:first-child),
  ${StyledFileUpload} ~ ${StyledFileList} > &:first-child {
    margin-top: ${props => props.theme.space.base * 2}px;
  }

  ${props => retrieveComponentStyles(COMPONENT_ID, props)};
`;

StyledFileListItem.defaultProps = {
  theme: DEFAULT_THEME
};
