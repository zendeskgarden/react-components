/**
* Copyright Zendesk, Inc.
*
* Use of this source code is governed under the Apache License, Version 2.0
* found at http://www.apache.org/licenses/LICENSE-2.0.
*/
import styled, { css } from 'styled-components';
import { componentStyles, getColor } from '@zendeskgarden/react-theming';
import { StyledBase } from './StyledBase.js';

const COMPONENT_ID$7 = 'notifications.well';
const colorStyles$6 = ({
  theme,
  $isFloating,
  $isRecessed
}) => {
  let backgroundVariable;
  if ($isRecessed) {
    backgroundVariable = 'background.recessed';
  } else if ($isFloating) {
    backgroundVariable = 'background.raised';
  } else {
    backgroundVariable = 'background.default';
  }
  const foreground = getColor({
    variable: 'foreground.subtle',
    theme
  });
  const background = getColor({
    variable: backgroundVariable,
    theme
  });
  return css(["background-color:", ";color:", ";"], background, foreground);
};
const StyledWell = styled(StyledBase).attrs({
  'data-garden-id': COMPONENT_ID$7,
  'data-garden-version': '9.12.3'
}).withConfig({
  displayName: "StyledWell",
  componentId: "sc-a5831c-0"
})(["", " ", ";"], colorStyles$6, componentStyles);

export { StyledWell };
