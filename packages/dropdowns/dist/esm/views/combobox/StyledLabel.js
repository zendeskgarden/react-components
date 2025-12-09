/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { Field } from '@zendeskgarden/react-forms';

const COMPONENT_ID$w = 'dropdowns.combobox.label';
const StyledLabel = styled(Field.Label).attrs({
  'data-garden-id': COMPONENT_ID$w,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledLabel",
  componentId: "sc-az6now-0"
})(["vertical-align:revert;", ";"], componentStyles);

export { StyledLabel };
