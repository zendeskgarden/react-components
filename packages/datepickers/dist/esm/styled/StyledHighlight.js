/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';

const COMPONENT_ID$1 = 'datepickers.highlight';
const sizeStyles$1 = ({
  theme,
  $isEnd,
  $isStart
}) => {
  let borderRadius;
  const startValue = '0 50% 50% 0;';
  const endValue = '50% 0 0 50%;';
  if (theme.rtl) {
    if ($isStart) {
      borderRadius = startValue;
    } else if ($isEnd) {
      borderRadius = endValue;
    }
  }
  if ($isStart) {
    borderRadius = endValue;
  } else if ($isEnd) {
    borderRadius = startValue;
  }
  return css(["border-radius:", ";width:100%;height:100%;"], borderRadius);
};
const colorStyles$1 = ({
  $isHighlighted,
  theme
}) => {
  return css(["background-color:", ";"], $isHighlighted && getColor({
    variable: 'background.primaryEmphasis',
    transparency: theme.opacity[100],
    theme
  }));
};
const StyledHighlight = styled.div.attrs({
  'data-garden-id': COMPONENT_ID$1,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledHighlight",
  componentId: "sc-16vr32x-0"
})(["position:absolute;top:0;left:0;", " ", " ", ";"], sizeStyles$1, colorStyles$1, componentStyles);

export { StyledHighlight };
