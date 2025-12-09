/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { Field } from '@zendeskgarden/react-forms';

const COMPONENT_ID = 'dropdowns.combobox.hint';
const StyledHint = styled(Field.Hint).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHint",
  componentId: "sc-106qvqx-0"
})(["", ";"], componentStyles);

export { StyledHint };
