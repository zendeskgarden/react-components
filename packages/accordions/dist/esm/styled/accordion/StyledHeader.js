/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { focusStyles, componentStyles } from '@zendeskgarden/react-theming';
import { StyledButton } from './StyledButton.js';

const COMPONENT_ID = 'accordions.header';
const StyledHeader = styled.div.attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeader",
  componentId: "sc-2c6rbr-0"
})(["display:flex;align-items:center;transition:box-shadow 0.1s ease-in-out;font-size:", ";&:hover{cursor:", ";}", " ", ";"], props => props.theme.fontSizes.md, props => (props.$isCollapsible || !props.$isExpanded) && 'pointer', props => focusStyles({
  theme: props.theme,
  inset: true,
  selector: `&:has(${StyledButton}:focus-visible)`
}), componentStyles);

export { StyledHeader };
