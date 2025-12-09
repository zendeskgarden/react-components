/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import SvgNewWindowStroke from '../node_modules/@zendeskgarden/svg-icons/src/12/new-window-stroke.svg.js';
import { componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$1 = 'buttons.external_icon';
const StyledExternalIcon = styled(SvgNewWindowStroke).attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledExternalIcon",
  componentId: "sc-16oz07e-0"
})(["transform:", ";margin-bottom:-0.085em;padding-left:0.25em;box-sizing:content-box;width:0.85em;height:0.85em;", ";"], props => props.theme.rtl && 'scaleX(-1)', componentStyles);

export { StyledExternalIcon };
