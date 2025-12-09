/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledLabel } from './StyledLabel.js';

const COMPONENT_ID = 'forms.fieldset_legend';
const StyledLegend = styled(StyledLabel).attrs({
  as: 'legend',
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledLegend",
  componentId: "sc-6s0zwq-0"
})(["padding:0;", ";"], componentStyles);

export { StyledLegend };
