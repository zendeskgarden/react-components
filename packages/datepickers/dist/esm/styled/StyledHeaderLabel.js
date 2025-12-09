/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$5 = 'datepickers.header_label';
const StyledHeaderLabel = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$5,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHeaderLabel",
  componentId: "sc-1ryf5ub-0"
})(["display:flex;flex-grow:1;align-items:center;justify-content:center;font-size:", ";font-weight:", ";", ";"], props => props.$isCompact ? props.theme.fontSizes.sm : props.theme.fontSizes.md, props => props.theme.fontWeights.semibold, componentStyles);

export { StyledHeaderLabel };
