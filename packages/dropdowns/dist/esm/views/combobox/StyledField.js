/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$r = 'dropdowns.combobox.field';
const StyledField = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$r,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledField",
  componentId: "sc-zc57xl-0"
})(["direction:", ";text-align:start;", ";"], props => props.theme.rtl ? 'rtl' : 'ltr', componentStyles);

export { StyledField };
