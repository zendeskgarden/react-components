/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import SvgCircleSmFill from '../../node_modules/@zendeskgarden/svg-icons/src/16/circle-sm-fill.svg.js';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'forms.toggle_svg';
const StyledToggleSvg = styled(SvgCircleSmFill).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledToggleSvg",
  componentId: "sc-162xbyx-0"
})(["transition:all 0.15s ease-in-out;", ";"], componentStyles);

export { StyledToggleSvg };
