/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledFileList } from './StyledFileList.js';
import { StyledFileUpload } from '../file-upload/StyledFileUpload.js';

const COMPONENT_ID = 'forms.file_list.item';
const StyledFileListItem = styled.li.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFileListItem",
  componentId: "sc-1ova3lo-0"
})(["&:not(:first-child),", " ~ ", " > &:first-child{margin-top:", "px;}", ";"], StyledFileUpload, StyledFileList, props => props.theme.space.base * 2, componentStyles);

export { StyledFileListItem };
