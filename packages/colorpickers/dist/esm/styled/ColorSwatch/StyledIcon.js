/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { StyledBaseIcon, componentStyles } from '@zendeskgarden/react-theming';
import { StyledColorSwatchInput } from './StyledColorSwatchInput.js';

const COMPONENT_ID = 'colorpickers.colorswatch_check';
const StyledIcon = styled(StyledBaseIcon).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledIcon",
  componentId: "sc-8oigif-0"
})(["position:absolute;top:0;left:0;transition:opacity 0.2s ease-in-out;opacity:0;width:100%;height:100%;", ":checked ~ &{opacity:1;}", ";"], StyledColorSwatchInput, componentStyles);

export { StyledIcon };
