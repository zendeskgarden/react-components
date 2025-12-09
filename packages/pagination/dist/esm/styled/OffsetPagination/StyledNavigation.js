/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledPage } from './StyledPage.js';

const COMPONENT_ID$1 = 'pagination.navigation';
const StyledNavigation = styled(StyledPage).attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledNavigation",
  componentId: "sc-1lpl8pp-0"
})(["display:flex;align-items:center;justify-content:center;", ";"], componentStyles);

export { StyledNavigation };
