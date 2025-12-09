/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { componentStyles } from '@zendeskgarden/react-theming';
import { getTrackHeight, getTrackMargin } from '../common/StyledRange.js';

const COMPONENT_ID$8 = 'colorpickers.colorpicker_sliders';
const sizeStyles = props => {
  if (props.$isOpaque) {
    return undefined;
  }
  const trackHeight = getTrackHeight(props);
  const trackMargin = getTrackMargin(props);
  return `
    & > * {
      position: absolute;
      width: 100%;
      height: ${trackMargin * 2 + trackHeight}px;
    }

    & > :first-child {
      top: -${trackMargin}px;
    }

    & > :last-child {
      bottom: -${trackMargin}px;
    }
  `;
};
const StyledSliders = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$8,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledSliders",
  componentId: "sc-1lgr50m-0"
})(["position:relative;margin-", ":", "px;width:100%;", " ", ";"], props => props.theme.rtl ? 'right' : 'left', props => props.theme.space.base * 2, sizeStyles, componentStyles);

export { StyledSliders };
