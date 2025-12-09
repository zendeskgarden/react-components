/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import SvgDashFill from '../../node_modules/@zendeskgarden/svg-icons/src/12/dash-fill.svg.js';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledCheckInput } from './StyledCheckInput.js';
import { StyledCheckLabel } from './StyledCheckLabel.js';

const COMPONENT_ID = 'forms.dash_svg';
const StyledDashSvg = styled(SvgDashFill).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledDashSvg",
  componentId: "sc-z3vq71-0"
})(["transition:opacity 0.25s ease-in-out;opacity:0;pointer-events:none;", ":indeterminate ~ ", " > &{opacity:1;}", ";"], StyledCheckInput, StyledCheckLabel, componentStyles);

export { StyledDashSvg };
