/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import SvgCheckSmFill from '../../node_modules/@zendeskgarden/svg-icons/src/12/check-sm-fill.svg.js';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledCheckInput } from './StyledCheckInput.js';
import { StyledCheckLabel } from './StyledCheckLabel.js';

const COMPONENT_ID$l = 'forms.check_svg';
const StyledCheckSvg = styled(SvgCheckSmFill).attrs({
  'data-garden-id': COMPONENT_ID$l,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledCheckSvg",
  componentId: "sc-fvxetk-0"
})(["transition:opacity 0.25s ease-in-out;opacity:0;pointer-events:none;", ":checked ~ ", " > &{opacity:1;}", ":indeterminate ~ ", " > &{opacity:0;}", ";"], StyledCheckInput, StyledCheckLabel, StyledCheckInput, StyledCheckLabel, componentStyles);

export { StyledCheckSvg };
