/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { Field } from '@zendeskgarden/react-forms';

const COMPONENT_ID = 'colorpickers.colorpicker_hex_field';
const StyledHexField = styled(Field).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  spellCheck: false
}).withConfig({
  displayName: "StyledHexField",
  componentId: "sc-ijq1c-0"
})(["display:flex;flex-basis:0;flex-direction:column;flex-grow:1;width:auto;text-align:center;input{direction:ltr;}", ";"], componentStyles);

export { StyledHexField };
