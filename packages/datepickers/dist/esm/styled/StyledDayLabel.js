/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$2 = 'datepickers.day_label';
const StyledDayLabel = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$2,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDayLabel",
  componentId: "sc-9bh1p7-0"
})(["display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:", ";font-weight:", ";", ";"], props => props.$isCompact ? props.theme.fontSizes.sm : props.theme.fontSizes.md, props => props.theme.fontWeights.semibold, componentStyles);

export { StyledDayLabel };
