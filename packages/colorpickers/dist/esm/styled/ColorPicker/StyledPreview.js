/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { rgba } from 'polished';
import { componentStyles, getCheckeredBackground } from '@zendeskgarden/react-theming';

const COMPONENT_ID = 'colorpickers.colorpicker_preview_box';
const background = props => {
  const alpha = props.$alpha ? props.$alpha / 100 : 0;
  let retVal = `rgba(${props.$red}, ${props.$green}, ${props.$blue}, ${alpha})`;
  if (!props.$isOpaque) {
    retVal = getCheckeredBackground({
      theme: props.theme,
      size: 13,
      overlay: retVal
    });
  }
  return retVal;
};
const StyledPreview = styled.div.attrs(props => ({
  style: {
    background: background(props)
  },
  'data-garden-id': COMPONENT_ID,
  'data-garden-version': '9.12.3',
  'data-test-id': 'preview-box'
})).withConfig({
  displayName: "StyledPreview",
  componentId: "sc-1z5nh7-0"
})(["flex-shrink:0;border-radius:", ";box-shadow:inset 0 0 0 ", " ", ";width:", "px;height:", "px;", ";"], props => props.theme.borderRadii.md, props => props.theme.borderWidths.sm, props => rgba(props.theme.palette.black, 0.19), props => props.theme.space.base * (props.$isOpaque ? 6 : 8), props => props.theme.space.base * (props.$isOpaque ? 6 : 8), componentStyles);

export { StyledPreview };
