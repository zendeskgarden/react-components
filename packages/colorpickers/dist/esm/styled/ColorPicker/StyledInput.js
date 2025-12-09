/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { Input } from '@zendeskgarden/react-forms';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$b = 'colorpickers.colorpicker_input';
const StyledInput = styled(Input).attrs({
  'data-garden-id': COMPONENT_ID$b,
  'data-garden-version': '9.12.3',
  focusInset: false
}).withConfig({
  displayName: "StyledInput",
  componentId: "sc-1uzlutt-0"
})(["text-align:center;", ";"], componentStyles);

export { StyledInput };
