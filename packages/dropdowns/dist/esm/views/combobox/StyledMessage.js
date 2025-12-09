/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { Field } from '@zendeskgarden/react-forms';

const COMPONENT_ID = 'dropdowns.combobox.message';
const StyledMessage = styled(Field.Message).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledMessage",
  componentId: "sc-jux8m5-0"
})(["", ";"], componentStyles);

export { StyledMessage };
