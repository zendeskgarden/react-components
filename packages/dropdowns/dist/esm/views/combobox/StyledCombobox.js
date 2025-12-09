/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledLabel } from './StyledLabel.js';
import { StyledHint } from './StyledHint.js';
import { StyledMessage } from './StyledMessage.js';

const COMPONENT_ID$t = 'dropdowns.combobox';
const sizeStyles$b = props => {
  const minWidth = `${props.$isCompact ? 100 : 144}px`;
  const marginTop = `${props.theme.space.base * (props.$isCompact ? 1 : 2)}px`;
  return css(["min-width:", ";", ":not([hidden]) + &&,", " + &&,", " + &&,&& + ", ",&& + ", "{margin-top:", ";}"], minWidth, StyledLabel, StyledHint, StyledMessage, StyledHint, StyledMessage, marginTop);
};
const StyledCombobox = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$t,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCombobox",
  componentId: "sc-13eybg8-0"
})(["", ";", ";"], sizeStyles$b, componentStyles);

export { StyledCombobox };
