/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled from 'styled-components';
import { rgba } from 'polished';
import { getCheckeredBackground, componentStyles } from '@zendeskgarden/react-theming';

const COMPONENT_ID$7 = 'colorpickers.colordialog_preview';
const background = ({
  $backgroundColor,
  theme
}) => {
  let retVal;
  if (typeof $backgroundColor === 'string') {
    retVal = $backgroundColor;
  } else if ($backgroundColor === undefined) {
    retVal = theme.palette.white;
  } else {
    const {
      red,
      green,
      blue,
      alpha = 1
    } = $backgroundColor;
    retVal = `rgba(${red}, ${green}, ${blue}, ${alpha ? alpha / 100 : 0})`;
  }
  return retVal;
};
const StyledButtonPreview = styled.span.attrs(props => ({
  style: {
    background: getCheckeredBackground({
      theme: props.theme,
      size: 8,
      overlay: background(props)
    })
  },
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3',
  'data-test-id': 'dialog-preview'
})).withConfig({
  displayName: "StyledButtonPreview",
  componentId: "sc-yxis8h-0"
})(["display:inline-block;bottom:", "px;border-radius:", ";box-shadow:inset 0 0 0 ", " ", ";width:", "px;height:", "px;", ";"], props => props.theme.space.base, props => props.theme.borderRadii.sm, props => props.theme.borderWidths.sm, props => rgba(props.theme.palette.black, 0.19), props => props.theme.space.base * 5, props => props.theme.space.base * 5, componentStyles);

export { StyledButtonPreview };
