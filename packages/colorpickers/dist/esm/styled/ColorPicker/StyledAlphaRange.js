/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { getCheckeredBackground } from '@zendeskgarden/react-theming';
import { StyledRange, getTrackMargin, getTrackHeight } from '../common/StyledRange.js';

const COMPONENT_ID = 'colorpickers.colorpicker_alpha';
const background = props => {
  const direction = `to ${props.theme.rtl ? 'left' : 'right'}`;
  const fromColor = `rgba(${props.$red}, ${props.$green}, ${props.$blue}, 0)`;
  const toColor = `rgb(${props.$red}, ${props.$green}, ${props.$blue})`;
  const positionY = getTrackMargin(props);
  const height = getTrackHeight(props);
  const overlay = `linear-gradient(${direction}, ${fromColor}, ${toColor}) 0 ${positionY}px / 100% ${height}px no-repeat`;
  return getCheckeredBackground({
    theme: props.theme,
    size: height,
    positionY,
    repeat: 'repeat-x',
    overlay
  });
};
const StyledAlphaRange = styled(StyledRange).attrs(props => ({
  style: {
    backgroundSize: 'auto',
    background: background(props)
  },
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3'
})).withConfig({
  displayName: "StyledAlphaRange",
  componentId: "sc-1f6hp2j-0"
})([""]);

export { StyledAlphaRange };
