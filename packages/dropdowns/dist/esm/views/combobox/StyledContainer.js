/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$s = 'dropdowns.combobox.container';
const StyledContainer = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$s,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledContainer",
  componentId: "sc-14i9jid-0"
})(["display:flex;", ";"], componentStyles);

export { StyledContainer };
