/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { StyledRange, getTrackMargin, getTrackHeight } from '../common/StyledRange.js';

const COMPONENT_ID = 'colorpickers.colorpicker_hue';
const StyledHueRange = styled(StyledRange).attrs({
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHueRange",
  componentId: "sc-1gdhww1-0"
})(["background:linear-gradient( to ", ",#f00 0%,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,#f00 100% ) no-repeat;background-position:", ";background-size:100% ", "px;"], props => props.theme.rtl ? 'left' : 'right', props => !props.$isOpaque && `0 ${getTrackMargin(props)}px`, props => getTrackHeight(props));

export { StyledHueRange };
