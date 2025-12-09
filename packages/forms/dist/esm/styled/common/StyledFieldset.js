/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledField } from './StyledField.js';

const COMPONENT_ID = 'forms.fieldset';
const StyledFieldset = styled(StyledField).attrs({
  as: 'fieldset',
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledFieldset",
  componentId: "sc-1vr4mxv-0"
})(["", "{margin-top:", "px;}", ";"], StyledField, props => props.theme.space.base * (props.$isCompact ? 1 : 2), componentStyles);

export { StyledFieldset };
