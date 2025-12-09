/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import SvgCircleSmFill from '../../node_modules/@zendeskgarden/svg-icons/src/12/circle-sm-fill.svg.js';
import { componentStyles } from '@zendeskgarden/react-theming';
import { StyledRadioInput } from './StyledRadioInput.js';
import { StyledRadioLabel } from './StyledRadioLabel.js';

const COMPONENT_ID = 'forms.radio_svg';
const StyledRadioSvg = styled(SvgCircleSmFill).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledRadioSvg",
  componentId: "sc-1r1qtr1-0"
})(["transition:opacity 0.25s ease-in-out;opacity:0;", ":checked ~ ", " > &{opacity:1;}", ";"], StyledRadioInput, StyledRadioLabel, componentStyles);

export { StyledRadioSvg };
