/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.field';
const StyledField = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledField",
  componentId: "sc-12gzfsu-0"
})(["position:relative;direction:", ";margin:0;border:0;padding:0;font-size:0;", ";"], props => props.theme.rtl ? 'rtl' : 'ltr', componentStyles);

export { StyledField };
