/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$4 = 'cursor_pagination';
const StyledCursorPagination = styled.nav.attrs({
  'data-garden-id': COMPONENT_ID$4,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCursorPagination",
  componentId: "sc-qmfecg-0"
})(["display:flex;justify-content:center;", ";"], componentStyles);

export { StyledCursorPagination };
