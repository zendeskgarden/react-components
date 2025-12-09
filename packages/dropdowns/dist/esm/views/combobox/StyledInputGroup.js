/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$o = 'dropdowns.combobox.input_group';
const sizeStyles$9 = props => {
  const margin = props.theme.shadowWidths.sm;
  return css(["margin:-", ";min-width:0;& > *{margin:", ";}"], margin, margin);
};
const StyledInputGroup = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$o,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledInputGroup",
  componentId: "sc-yx3q7u-0"
})(["display:flex;flex-grow:1;flex-wrap:wrap;", ";", ";"], sizeStyles$9, componentStyles);

export { StyledInputGroup };
