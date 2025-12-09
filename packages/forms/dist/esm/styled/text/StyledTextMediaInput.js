/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledTextInput } from './StyledTextInput.js';

const COMPONENT_ID$v = 'forms.media_input';
const StyledTextMediaInput = styled(StyledTextInput).attrs({
  'data-garden-id': COMPONENT_ID$v,
  'data-garden-version': '9.12.3',
  $isBare: true
}).withConfig({
  displayName: "StyledTextMediaInput",
  componentId: "sc-12i9xfi-0"
})(["flex-grow:1;", ";"], componentStyles);

export { StyledTextMediaInput };
