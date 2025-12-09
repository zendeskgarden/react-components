/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'breadcrumbs.list';
const StyledBreadcrumb = styled.ol.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledBreadcrumb",
  componentId: "sc-11jrinn-0"
})(["display:flex;margin:0;padding:0;list-style:none;font-size:", ";direction:", ";", ";"], props => props.theme.fontSizes.md, props => props.theme.rtl && 'rtl', componentStyles);

export { StyledBreadcrumb };
