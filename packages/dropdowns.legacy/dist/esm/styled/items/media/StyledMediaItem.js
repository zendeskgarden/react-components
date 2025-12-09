/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledItem } from '../StyledItem.js';

const COMPONENT_ID = 'dropdowns.media_item';
const StyledMediaItem = styled(StyledItem).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMediaItem",
  componentId: "sc-af4509-0"
})(["", ";"], componentStyles);

export { StyledMediaItem };
