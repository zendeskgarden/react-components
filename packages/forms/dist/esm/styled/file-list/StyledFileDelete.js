/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getColor, componentStyles } from '@zendeskgarden/react-theming';
import { StyledFileClose } from './StyledFileClose.js';

const COMPONENT_ID = 'forms.file.delete';
const StyledFileDelete = styled(StyledFileClose).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFileDelete",
  componentId: "sc-a8nnhx-0"
})(["color:", ";", ";"], props => getColor({
  theme: props.theme,
  variable: 'foreground.danger'
}), componentStyles);

export { StyledFileDelete };
